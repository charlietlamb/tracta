import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import CreateStylesSpacingStandard from './CreateStylesSpacingStandard'
import StylesSectionLabel from '../StylesSectionLabel'

export default function CreateStylesSpacing() {
  return (
    <AccordionItem
      value="spacing"
      className="w-full rounded-none border-none bg-dark text-white shadow-none"
    >
      <StylesSectionLabel>Spacing</StylesSectionLabel>
      <AccordionContent className="grid h-full w-full grid-cols-[44px_1fr_44px_1fr] gap-2 rounded-none border-t border-border bg-dark p-2 font-veryLight">
        <CreateStylesSpacingStandard />
      </AccordionContent>
    </AccordionItem>
  )
}
