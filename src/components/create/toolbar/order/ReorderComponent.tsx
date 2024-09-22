import React, { useEffect, useRef, useState } from 'react'
import { componentIconMap } from '@/lib/sandbox/componentIconMap'
import getNumParents from '@/lib/sandbox/reorder/getNumParents'
import { useEditorStore } from '@/state/editor/store'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

export default function ReorderComponent({
  component,
  isDragging,
}: {
  component: TractaComponent
  isDragging: boolean
}) {
  const elementRef = useRef<HTMLDivElement>(null)
  const [xPosition, setXPosition] = useState(0)
  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null

    if (isDragging) {
      intervalId = setInterval(() => {
        if (elementRef.current) {
          const rect = elementRef.current.getBoundingClientRect()
          setXPosition(rect.x)
          console.log(rect.x)
        }
      }, 100)
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId)
      }
    }
  }, [isDragging])
  if (!component.tracta) return null
  const { editorState, changeClickedComponent } = useEditorStore(
    (state) => state,
  )
  const iconFunc = componentIconMap.get(component.tracta)
  const icon = iconFunc ? iconFunc('size-4') : null
  const numParents =
    getNumParents(editorState.editor.components, component) || -1
  const selected = editorState.editor.selected?.id

  return (
    <div
      className={cn(
        'flex cursor-pointer items-center px-2 text-white transition hover:bg-border/20',
        selected === component.id && 'bg-blue-500/40 hover:bg-blue-500/20',
        isDragging && 'bg-transparent hover:bg-transparent',
      )}
      onClick={() => changeClickedComponent(editorState, component)}
      ref={elementRef}
    >
      <div
        style={{
          width: `${16 * (numParents - 1)}px`,
          marginRight: numParents > 1 ? '4px' : '0px',
        }}
        className="flex h-[20px] justify-center"
      >
        {numParents > 1 && !isDragging && (
          <div className="h-full w-px bg-border" />
        )}
      </div>
      <div className="flex items-center py-[2px]">
        {icon}
        <p className="ml-1 text-xs text-white/80">{component.name}</p>
      </div>
    </div>
  )
}
