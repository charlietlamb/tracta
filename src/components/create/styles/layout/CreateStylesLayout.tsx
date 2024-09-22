import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import CreateStylesLayoutFlex from './CreateStylesLayoutFlex'
import StylesSectionLabel from '../StylesSectionLabel'

export default function CreateStylesLayout() {
  return (
    <AccordionItem
      value="layout"
      className="w-full rounded-none border-none bg-dark text-white shadow-none"
    >
      <StylesSectionLabel>Layout</StylesSectionLabel>
      <AccordionContent className="grid h-full w-full grid-cols-[44px_1fr_44px_1fr] gap-2 rounded-none border-t border-border bg-dark p-2 font-veryLight">
        <CreateStylesLayoutFlex />
      </AccordionContent>
    </AccordionItem>
  )
}
