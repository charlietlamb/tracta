import { Input } from '@/components/ui/input'
import React, { Dispatch, SetStateAction } from 'react'
import { useCreateContext } from '../../../context/createContext'

export default function CreateSidebarTypographySize({
  size,
  setSize,
  height,
  setHeight,
}: {
  size: string
  setSize: Dispatch<SetStateAction<string>>
  height: string
  setHeight: Dispatch<SetStateAction<string>>
}) {
  const { key, index, json, setJson, setLastChange } = useCreateContext()
  return (
    <div className="grid grid-cols-2 gap-2">
      <div className="flex w-full items-center gap-1">
        <h6 className="text-sm font-light">Size</h6>
        <div className="relative">
          <Input
            className="border-darkBorder selection:bg-darkBorder mb-0 h-auto border bg-transparent p-[2px] pr-6 shadow-none"
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
          <div className="absolute right-1 top-0 text-white">px</div>
        </div>
      </div>
      <div className="flex w-full items-center gap-1">
        <h6 className="text-sm font-light">Height</h6>
        <div className="relative">
          <Input
            className="border-darkBorder selection:bg-darkBorder mb-0 h-auto border bg-transparent p-[2px] pr-6 shadow-none"
            value={height}
            onChange={(e) => {
              setHeight(e.target.value)
              const num = parseInt(e.target.value)
              if (isNaN(num)) return
              const newJson = JSON.parse(JSON.stringify(json))
              newJson[key][index].style.lineHeight = e.target.value + 'px'
              setJson(newJson)
              setLastChange(Date.now())
            }}
          />
          <div className="absolute right-1 top-0 text-white">px</div>
        </div>
      </div>
    </div>
  )
}
