import { useEditorStore } from '@/state/editor/store'
import TractaComponent from './TractaComponent'
import { useSandbox } from '@/lib/sandbox/hooks/useSandbox'
import { useResizeDetector } from 'react-resize-detector'
import { useSandboxStore } from '@/state/sandbox/store'
import { Resizable } from 're-resizable'

export default function CreateSandbox() {
  const { editorState } = useEditorStore((state) => state)
  const { setWidth } = useSandboxStore((state) => state)
  const { width, height, ref } = useResizeDetector()
  useSandbox(width, height, ref, editorState.editor.pages, setWidth)
  return (
    <div
      className="bg-darker no-scrollbar flex w-full flex-grow flex-col items-center overflow-y-auto px-[10vw] py-4"
      style={{ height: 'calc(100vh - 32px)' }}
    >
      <Resizable
        defaultSize={{
          width: '80vw',
          height: '100%',
        }}
        maxHeight="100%"
        minHeight="100%"
        enable={{
          top: false,
          right: true,
          bottom: false,
          left: false,
          topRight: false,
          bottomRight: false,
          bottomLeft: false,
          topLeft: false,
        }}
      >
        <div className="w-full bg-white" ref={ref}>
          {Array.isArray(editorState.editor.components) &&
            editorState.editor.components.map((c) => (
              <TractaComponent key={c.id} component={c} />
            ))}
        </div>
      </Resizable>
    </div>
  )
}
