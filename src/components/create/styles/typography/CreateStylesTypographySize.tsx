import { Input } from '@/components/ui/input'
import { defaultStyles } from '@/lib/constants'
import { extractDigits } from '@/lib/general/extractDigits'
import { updateStyles } from '@/lib/sandbox/styles/updateStyles'
import { useEditorStore } from '@/state/editor/store'
import React, {
  Dispatch,
  SetStateAction,
  use,
  useEffect,
  useState,
} from 'react'

export default function CreateStylesTypographySize() {
  const { editorState, getComponent, updateComponent } = useEditorStore(
    (state) => state,
  )
  const selected = editorState.editor.selected
  const [size, setSize] = useState<string>(
    extractDigits(
      typeof selected?.styles?.fontSize === 'string'
        ? selected?.styles?.fontSize
        : '16',
    ),
  )
  const [height, setHeight] = useState<string>(
    extractDigits(
      typeof selected?.styles?.lineHeight === 'string'
        ? selected?.styles?.lineHeight
        : '16',
    ),
  )

  useEffect(() => {
    setSize(
      extractDigits(
        typeof selected?.styles?.fontSize === 'string'
          ? selected?.styles?.fontSize
          : '16',
      ),
    )
    setHeight(
      extractDigits(
        typeof selected?.styles?.lineHeight === 'string'
          ? selected?.styles?.lineHeight
          : '16',
      ),
    )
  }, [selected])
  if (!selected) return null
  return (
    <>
      <h6 className="flex items-center justify-start font-larken">Size</h6>
      <div className="relative w-full">
        <Input
          variant="editor"
          value={size}
          onChange={(e) => {
            setSize(e.target.value)
            updateStyles(
              editorState,
              selected.id,
              { fontSize: e.target.value + 'px' },
              getComponent,
              updateComponent,
            )
          }}
        />
        <div className="absolute right-1 top-0 text-white">px</div>
      </div>
      <h6 className="flex items-center justify-start font-larken">Height</h6>
      <div className="relative w-full">
        <Input
          variant="editor"
          value={height}
          onChange={(e) => {
            setHeight(e.target.value)
            updateStyles(
              editorState,
              selected.id,
              { lineHeight: e.target.value + 'px' },
              getComponent,
              updateComponent,
            )
          }}
        />
        <div className="absolute right-1 top-0 text-white">px</div>
      </div>
    </>
  )
}
