import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Input } from '@/components/ui/input'
import { useEffect, useState } from 'react'
import { useCreateContext } from '../../context/createContext'

export default function CreateSidebarTypography() {
  const { json, setJson, key, index, setLastChange } = useCreateContext()
  const style = json[key][index].style
  const [size, setSize] = useState('fontSize' in style ? style.fontSize : '16')
  const [open, setOpen] = useState(true)
  useEffect(() => {
    setSize('fontSize' in style ? style.fontSize : '16')
  }, [key, index])
  return (
    <AccordionItem
      value="typography"
      className="bg-bgDark rounded-none border-none text-white"
    >
      <AccordionTrigger className="bg-bgDark font-larken rounded-none border-none p-2">
        Typography
      </AccordionTrigger>
      <AccordionContent className="bg-bgDark font-larken flex flex-col rounded-none p-0 px-4">
        <div className="flex items-center gap-2">
          <h6>Size</h6>
          <Input
            className="bg-bgDark border-darkBorder  mb-0 h-auto w-auto border p-1 shadow-none"
            value={size}
            onChange={(e) => {
              setSize(e.target.value)
              const num = parseInt(e.target.value)
              if (isNaN(num)) return
              const newJson = JSON.parse(JSON.stringify(json))
              newJson[key][index].style.fontSize = e.target.value + 'px'
              setJson(newJson)
              setLastChange(Date.now())
            }}
          />
          px
        </div>
      </AccordionContent>
    </AccordionItem>
  )
}
