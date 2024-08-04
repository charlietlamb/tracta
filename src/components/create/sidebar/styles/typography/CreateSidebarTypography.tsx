import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Input } from '@/components/ui/input'
import { useEffect, useState } from 'react'
import { useCreateContext } from '../../../context/createContext'
import { HexColorPicker } from 'react-colorful'
import CreateSidebarTypographySize from './CreateSidebarTypographySize'
import CreateSidebarTypographyColor from './CreateSidebarTypographyColor'
import CreateSidebarTypographyAlign from './CreateSidebarTypographyAlign'

export default function CreateSidebarTypography() {
  const { json, key, index } = useCreateContext()
  const style = json[key][index].style || {}
  //set typography
  const [size, setSize] = useState(
    'fontSize' in style ? style.fontSize.replace(/px$/, '') : '16',
  )
  const [height, setHeight] = useState(
    'lineHeight' in style ? style.lineHeight.replace(/px$/, '') : '16',
  )
  const [color, setColor] = useState('color' in style ? style.color : '#000000')
  const [align, setAlign] = useState(
    'textAlign' in style ? style.alignItems : 'start',
  )
  //update typography
  useEffect(() => {
    setSize('fontSize' in style ? style.fontSize.replace(/px$/, '') : '16')
    setHeight(
      'lineHeight' in style ? style.lineHeight.replace(/px$/, '') : '16',
    )
    setColor('color' in style ? style.color : '#000000')
    setAlign('textAlign' in style ? style.alignItems : 'start')
  }, [key, index])

  return (
    <AccordionItem
      value="typography"
      className="bg-dark rounded-none border-none text-white"
    >
      <AccordionTrigger className="bg-dark rounded-none border-none p-2 py-0 font-larken">
        Typography
      </AccordionTrigger>
      <AccordionContent className="bg-dark flex flex-col gap-2 rounded-none p-0 px-4 font-larken">
        <CreateSidebarTypographySize
          size={size}
          setSize={setSize}
          height={height}
          setHeight={setHeight}
        />
        <CreateSidebarTypographyColor color={color} setColor={setColor} />
        <CreateSidebarTypographyAlign align={align} setAlign={setAlign} />
      </AccordionContent>
    </AccordionItem>
  )
}
