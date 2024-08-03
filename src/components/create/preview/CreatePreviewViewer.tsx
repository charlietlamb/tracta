import { Viewer, Worker } from '@react-pdf-viewer/core'
import '@react-pdf-viewer/core/lib/styles/index.css'
import { OpenFile } from '@react-pdf-viewer/core'
import { getFilePlugin } from '@react-pdf-viewer/get-file'
import { searchPlugin } from '@react-pdf-viewer/search'
import { pageNavigationPlugin } from '@react-pdf-viewer/page-navigation'
import { zoomPlugin } from '@react-pdf-viewer/zoom'
import { printPlugin } from '@react-pdf-viewer/print'
import {
  ToolbarProps,
  ToolbarSlot,
  toolbarPlugin,
} from '@react-pdf-viewer/toolbar'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'
import '@react-pdf-viewer/toolbar/lib/styles/index.css'
import '@react-pdf-viewer/print/lib/styles/index.css'
import '@react-pdf-viewer/zoom/lib/styles/index.css'
import '@react-pdf-viewer/page-navigation/lib/styles/index.css'
import '@react-pdf-viewer/search/lib/styles/index.css'
import { Search } from 'lucide-react'

export default function CreatePreviewViewer({ pdfUrl }: { pdfUrl: string }) {
  const getFilePluginInstance = getFilePlugin({
    fileNameGenerator: (file: OpenFile) => {
      // const fileName = file.name.substring(file.name.lastIndexOf('/') + 1)
      return `contract.pdf`
    },
  })
  const renderToolbar = (
    Toolbar: (props: ToolbarProps) => React.ReactElement,
  ) => (
    <Toolbar>
      {(slots: ToolbarSlot) => {
        const {
          CurrentPageInput,
          Download,
          EnterFullScreen,
          GoToNextPage,
          GoToPreviousPage,
          NumberOfPages,
          Print,
          ShowSearchPopover,
          Zoom,
          ZoomIn,
          ZoomOut,
        } = slots
        return (
          <div className="flex w-full  items-center gap-2 text-white">
            <div className="flex w-full items-center justify-start gap-2">
              <ShowSearchPopover />
              <ZoomOut />
              <Zoom />
              <ZoomIn />
            </div>
            <div className="flex w-full items-center justify-center gap-2">
              <GoToPreviousPage />
              <div className="flex items-center gap-2">
                <CurrentPageInput /> / <NumberOfPages />
              </div>
              <GoToNextPage />
            </div>
            <div className="flex w-full items-center justify-end gap-2">
              <Download />
              <Print />
            </div>
          </div>
        )
      }}
    </Toolbar>
  )
  const zoomPluginInstance = zoomPlugin()
  const printPluginInstance = printPlugin()
  const pageNavigationPluginInstance = pageNavigationPlugin()
  const searchPluginInstance = searchPlugin()
  const toolbarPluginInstance = toolbarPlugin()
  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    renderToolbar,
    sidebarTabs: () => [],
  })
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
      <Viewer
        fileUrl={pdfUrl}
        plugins={[
          defaultLayoutPluginInstance,
          toolbarPluginInstance,
          zoomPluginInstance,
          printPluginInstance,
          pageNavigationPluginInstance,
          searchPluginInstance,
          getFilePluginInstance,
        ]}
        // theme="dark"
      />
    </Worker>
  )
}
