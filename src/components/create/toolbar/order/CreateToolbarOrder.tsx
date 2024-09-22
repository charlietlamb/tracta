import { useEditorStore } from '@/state/editor/store'
import { useSandboxStore } from '@/state/sandbox/store'
import React, { useRef, useState } from 'react'
import ReorderComponent from './ReorderComponent'
import { Reorder } from 'framer-motion'

export default function CreateToolbarOrder() {
  const { editorState, addComponent, getComponentArray } = useEditorStore(
    (state) => state,
  )
  const { setMode } = useSandboxStore((state) => state)
  const selected =
    editorState.editor.selected?.id || editorState.editor.components[0].id
  const [components, setComponents] = useState(
    getComponentArray(editorState).slice(1),
  )
  const constraintsRef = useRef<HTMLDivElement>(null)

  const [isDragging, setIsDragging] = useState<string | null>(null)
  return (
    <div className="absolute bottom-0 left-[100%] top-0 z-50 flex h-full w-60 flex-col divide-y divide-border rounded-none border-x !border-t-0 border-border bg-dark text-light shadow-none transition">
      <h4 className="px-2 py-1 font-larken text-xl font-bold text-white">
        Reorder
      </h4>
      <Reorder.Group
        axis="y"
        values={components}
        onReorder={setComponents}
        className="flex flex-col"
        ref={constraintsRef}
      >
        {components.map((component) => (
          <Reorder.Item
            dragConstraints={constraintsRef}
            drag
            key={component.id}
            value={component}
            onDragStart={() => setIsDragging(component.id)}
            onDragEnd={() => setIsDragging(null)}
          >
            <ReorderComponent
              component={component}
              isDragging={component.id === isDragging}
            />
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </div>
  )
}
