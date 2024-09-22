import { cn } from '@/lib/utils'
import { useEditorStore } from '@/state/editor/store'
import { useSandboxStore } from '@/state/sandbox/store'
import React from 'react'

export default function Hover({
  component,
  styles,
}: {
  component: TractaComponent
  styles: React.CSSProperties
}) {
  const { editorState } = useEditorStore((state) => state)
  const { hover } = useSandboxStore((state) => state)
  return (
    <div
      className={cn(
        'pointer-events-none absolute inset-0 transition duration-75',
      )}
      style={{
        backgroundColor:
          hover === component.id &&
          !(
            editorState.editor.selected &&
            editorState.editor.selected.id === component.id
          )
            ? '#3b82f620'
            : 'transparent',
      }}
    />
  )
}
