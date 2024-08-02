'use client'

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '../ui/resizable'
import { CreateContext } from './context/createContext'
import CreateHeader from './header/CreateHeader'
import CreatePreview from './preview/CreatePreview'
import CreateSandbox from './sandbox/CreateSandbox'
import CreateSidebar from './sidebar/CreateSidebar'
import { useState } from 'react'

export default function Create({ json: jsonInit }: { json: Contract }) {
  const [json, setJson] = useState<Contract>(jsonInit)
  const [key, setKey] = useState<string>('1')
  const [index, setIndex] = useState<number>(0)
  let initTitle = 'Tracta'
  try {
    initTitle = json[key][index].value
  } catch (e) {}
  const [title, setTitle] = useState(initTitle)
  const [addOpen, setAddOpen] = useState(false)
  const [varOpen, setVarOpen] = useState(false)
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [sidebarSelected, setSidebarSelected] = useState<string | null>('1')
  const [lastChange, setLastChange] = useState<number>(Date.now())
  const [pdfUrl, setPdfUrl] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [isDragging, setIsDragging] = useState<boolean>(false)
  const [dnd, setDnd] = useState<boolean>(false)
  return (
    <CreateContext.Provider
      value={{
        json,
        setJson,
        key,
        setKey,
        index,
        setIndex,
        title,
        setTitle,
        addOpen,
        setAddOpen,
        varOpen,
        setVarOpen,
        settingsOpen,
        setSettingsOpen,
        sidebarSelected,
        setSidebarSelected,
        lastChange,
        setLastChange,
        pdfUrl,
        setPdfUrl,
        loading,
        setLoading,
        isDragging,
        setIsDragging,
        dnd,
        setDnd,
      }}
    >
      <div className="divide-darkBorder flex h-screen flex-col divide-y-2">
        <CreateHeader />
        <ResizablePanelGroup
          direction="horizontal"
          className="divide-darkBorder flex flex-grow divide-x"
          // style={{ height: 'calc(100vh - 58px)' }}
        >
          <ResizablePanel
            minSize={10}
            defaultSize={15}
            maxSize={40}
            className="relative z-50"
          >
            <CreateSidebar />
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel minSize={20}>
            <CreateSandbox />
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel minSize={5}>
            <CreatePreview />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </CreateContext.Provider>
  )
}
