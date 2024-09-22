import { getStyles } from '@/lib/sandbox/styles/getStyles'
import { useEditorStore } from '@/state/editor/store'
import { useSandboxStore } from '@/state/sandbox/store'
import { Plus } from 'lucide-react'
import React from 'react'

export default function ContainerAdd({ pdf }: { pdf: boolean }) {
  const { width, setMode } = useSandboxStore((state) => state)
  const { editorState } = useEditorStore((state) => state)
  if (pdf || editorState.editor.liveMode) return null
  return (
    <div
      className="flex h-full w-full cursor-pointer items-center justify-center"
      onClick={() => setMode('add')}
      style={getStyles({ minHeight: '64px' }, width)}
    >
      <Plus
        className="text-border/20"
        style={getStyles({ width: '32px', height: '32px' }, width)}
      />
    </div>
  )
}
