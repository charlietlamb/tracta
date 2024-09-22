import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { useEditorStore } from '@/state/editor/store'
import { useSandboxStore } from '@/state/sandbox/store'
import React, { useEffect, useState } from 'react'

export default function ComponentLabel({
  component,
  pdf,
}: {
  component: TractaComponent
  pdf: boolean
}) {
  const { editorState, getParent, changeClickedComponent } = useEditorStore(
    (state) => state,
  )
  const firstParent = getParent(editorState, component)
  const secondParent = firstParent ? getParent(editorState, firstParent) : null
  const [clicked, setClicked] = useState(false)
  const { hover } = useSandboxStore((state) => state)
  useEffect(() => {
    if (editorState.editor.selected?.id !== component.id) setClicked(false)
  }, [editorState.editor.selected])
  if (editorState.editor.liveMode || pdf) return null
  return (
    <div
      className={cn('absolute left-0 top-0', firstParent && 'cursor-pointer')}
    >
      {clicked && firstParent && (
        <>
          <Badge
            onClick={(e) => {
              e.stopPropagation()
              changeClickedComponent(editorState, firstParent)
              setClicked(false)
            }}
            variant="editor"
            className={cn(
              'absolute -top-[36px]  left-0 z-50 hidden w-fit',
              editorState.editor.selected?.id === component.id &&
                !editorState.editor.liveMode &&
                'block',
            )}
          >
            {firstParent.name}
          </Badge>
          {secondParent && (
            <Badge
              onClick={(e) => {
                e.stopPropagation()
                changeClickedComponent(editorState, firstParent)
                setClicked(false)
              }}
              variant="editor"
              className={cn(
                'absolute -top-[56px] left-0 z-50 hidden w-fit',
                editorState.editor.selected?.id === component.id &&
                  !editorState.editor.liveMode &&
                  'block',
              )}
            >
              {secondParent.name}
            </Badge>
          )}
        </>
      )}
      <Badge
        onClick={() => {
          if (editorState.editor.selected?.id === component.id) {
            setClicked(!clicked)
          } else {
            changeClickedComponent(editorState, component)
          }
        }}
        variant={
          hover === component.id &&
          !(
            editorState.editor?.selected &&
            editorState.editor?.selected.id === component.id
          )
            ? 'editorGhost'
            : 'editor'
        }
        className={cn(
          'hidden',
          (editorState.editor.selected?.id === component.id ||
            hover === component.id) &&
            'block',
        )}
      >
        {component.name}
      </Badge>
    </div>
  )
}
