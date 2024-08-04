import { Input } from '@/components/ui/input'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Dispatch, SetStateAction, useEffect } from 'react'
import { HexColorPicker } from 'react-colorful'
import { useCreateContext } from '../../../context/createContext'
export default function CreateSidebarTypographyColor({
  color,
  setColor,
}: {
  color: string
  setColor: Dispatch<SetStateAction<string>>
}) {
  const { key, index, setJson, setLastChange, json } = useCreateContext()
  useEffect(() => {
    const newJson = JSON.parse(JSON.stringify(json))
    newJson[key][index].style.color = color
    setJson(newJson)
    setLastChange(Date.now())
  }, [color])
  return (
    <div className="flex w-full items-center gap-1">
      <h6 className="text-sm font-light">Color</h6>
      <Popover>
        <div className="border-border flex items-center overflow-hidden rounded-base border">
          <PopoverTrigger asChild>
            <div className="size-6" style={{ backgroundColor: color }} />
          </PopoverTrigger>
          <Input
            className="selection:bg-border mb-0 h-6 border-none bg-transparent px-1 shadow-none"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
        <PopoverContent className="min-w-none w-auto rounded-base border-none p-0">
          <HexColorPicker color={color} onChange={setColor} />
        </PopoverContent>
      </Popover>
    </div>
  )
}
