import { Input } from '@/components/ui/input'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { updateStyles } from '@/lib/sandbox/styles/updateStyles'
import { useEditorStore } from '@/state/editor/store'
import { useEffect, useState } from 'react'
import { HexColorPicker } from 'react-colorful'
export default function CreateStylesBackgroundStandard() {
  const { editorState, updateComponent, getComponent } = useEditorStore(
    (state) => state,
  )
  const selected = editorState.editor.selected
  const [color, setColor] = useState(
    selected?.styles?.backgroundColor || '#00000000',
  )
  if (!selected) return null
  useEffect(() => {
    setColor(selected?.styles?.color || '#00000000')
  }, [selected])

  function handleColorChange(e: string) {
    if (!selected) return
    setColor(e)
    updateStyles(
      editorState,
      selected.id,
      { backgroundColor: e },
      getComponent,
      updateComponent,
    )
  }
  return (
    <>
      <h6 className="flex items-center justify-start font-larken">Color</h6>
      <Popover>
        <div className="border-border col-span-3 flex items-center overflow-hidden rounded-base border">
          <PopoverTrigger asChild>
            <div className="size-6" style={{ backgroundColor: color }} />
          </PopoverTrigger>
          <Input
            variant="editor"
            className="border-none"
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
