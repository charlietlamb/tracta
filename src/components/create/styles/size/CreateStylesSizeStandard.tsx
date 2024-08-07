import { Input } from '@/components/ui/input'
import { defaultStyles } from '@/lib/constants'
import { extractDigits } from '@/lib/general/extractDigits'
import { updateStyles } from '@/lib/sandbox/styles/updateStyles'
import { useEditorStore } from '@/state/editor/store'
import React, { useEffect, useState } from 'react'

export default function CreateStylesSizeStandard() {
  const { editorState, getComponent, updateComponent } = useEditorStore(
    (state) => state,
  )
  const selected = editorState.editor.selected
  const [width, setWidth] = useState<string>(
    extractDigits(
      typeof selected?.styles?.width === 'string'
        ? selected?.styles?.width
        : '100',
    ),
  )
  const [height, setHeight] = useState<string>(
    extractDigits(
      typeof selected?.styles?.height === 'string'
        ? selected?.styles?.height
        : '100',
    ),
  )

  useEffect(() => {
    setWidth(
      extractDigits(
        typeof selected?.styles?.width === 'string'
          ? selected?.styles?.width
          : '100',
      ),
    )
    setHeight(
      extractDigits(
        typeof selected?.styles?.height === 'string'
          ? selected?.styles?.height
          : '100',
      ),
    )
  }, [selected])
  if (!selected) return null
  return (
    <>
      <h6 className="flex items-center justify-start font-larken">Width</h6>
      <Input
        variant="editor"
        value={width}
        onChange={(e) => {
          setWidth(e.target.value)
          updateStyles(
            editorState,
            selected.id,
            { width: e.target.value + '%' },
            getComponent,
            updateComponent,
          )
        }}
      />
      <h6 className="flex items-center justify-start font-larken">Height</h6>
      <Input
        variant="editor"
        value={height}
        onChange={(e) => {
          setHeight(e.target.value)
          updateStyles(
            editorState,
            selected.id,
            { height: e.target.value + '%' },
            getComponent,
            updateComponent,
          )
        }}
      />
    </>
  )
}
