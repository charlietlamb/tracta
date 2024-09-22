import { Input } from '@/components/ui/input'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { updateStyles } from '@/lib/sandbox/styles/updateStyles'
import { useEditorStore } from '@/state/editor/store'
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react'
import { HexColorPicker } from 'react-colorful'
import StyleLabel from '../StyleLabel'
export default function CreateStylesTypographyColor() {
  const { editorState, updateComponent, getComponent } = useEditorStore(
    (state) => state,
  )
  const selected = editorState.editor.selected
  const [color, setColor] = useState(selected?.styles?.color || '#000000')
  if (!selected) return null
  useEffect(() => {
    setColor(selected?.styles?.color || '#000000')
  }, [selected])

  function handleColorChange(e: string) {
    if (!selected) return
    setColor(e)
    updateStyles(
      editorState,
      selected.id,
      { color: e },
      getComponent,
      updateComponent,
    )
  }
  return (
    <>
      <StyleLabel>Color</StyleLabel>
      <Popover>
        <div className="col-span-3 flex items-center overflow-hidden rounded-base">
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
    </>
  )
}
