import { useEditorStore } from '@/state/editor/store'
import { BorderMode } from './CreateStylesBorderStyleComplex'
import { useEffect, useState } from 'react'
import { getInitStyle } from '@/lib/sandbox/styles/getInitStyle'
import { updateStyles } from '@/lib/sandbox/styles/updateStyles'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Input } from '@/components/ui/input'
import { HexColorPicker } from 'react-colorful'

const borderModeMap: Record<BorderMode, keyof React.CSSProperties> = {
  top: 'borderTopColor',
  bottom: 'borderBottomColor',
  left: 'borderLeftColor',
  right: 'borderRightColor',
  all: 'borderColor',
}

export default function CreateStylesBorderStyleColor({
  borderMode,
}: {
  borderMode: BorderMode
}) {
  const { editorState, updateComponent, getComponent } = useEditorStore(
    (state) => state,
  )
  const selected = editorState.editor.selected
  const [color, setColor] = useState(
    getInitStyle(
      selected?.styles,
      borderModeMap[borderMode],
      false,
      '#000000',
    ) as string,
  )
  if (!selected) return null

  function handleColorChange(e: string) {
    if (!selected) return
    setColor(e)
    updateStyles(
      editorState,
      selected.id,
      { [borderModeMap[borderMode]]: e },
      getComponent,
      updateComponent,
    )
  }

  useEffect(() => {
    setColor(
      getInitStyle(
        selected?.styles,
        borderModeMap[borderMode],
        false,
        '#000000',
      ) as string,
    )
  }, [selected, borderMode])
  return (
    <Popover>
      <div className="flex items-center overflow-hidden rounded-base">
        <PopoverTrigger asChild>
          <div
            className="size-6 cursor-pointer"
            style={{ backgroundColor: color }}
          />
        </PopoverTrigger>
        <Input
          variant="editor"
          className="rounded-none border-none"
          value={color}
          onChange={(e) => handleColorChange(e.target.value)}
        />
      </div>
      <PopoverContent className="min-w-none w-auto rounded-base border-none p-0">
        <HexColorPicker
          color={color}
          onChange={(e) => {
            handleColorChange(e)
          }}
        />
      </PopoverContent>
    </Popover>
  )
}
