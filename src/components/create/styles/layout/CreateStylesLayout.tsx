import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import CreateStylesLayoutFlex from './CreateStylesLayoutFlex'

export default function CreateStylesLayout() {
  return (
    <AccordionItem
      value="layout"
      className="bg-dark w-full rounded-none border-none text-white shadow-none"
    >
      <AccordionTrigger className="bg-dark rounded-none border-none p-2 py-0 font-larken">
        Layout
      </AccordionTrigger>
      <AccordionContent className="bg-dark font-veryLight grid h-full w-full grid-cols-[48px_1fr_48px_1fr] gap-2 rounded-none p-2">
        <CreateStylesLayoutFlex />
      </AccordionContent>
    </AccordionItem>
  )
}
