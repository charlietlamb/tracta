import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import CreateStylesSizeStandard from '../size/CreateStylesSizeStandard'
import StylesSectionLabel from '../StylesSectionLabel'

export default function CreateStylesSize() {
  return (
    <AccordionItem
      value="size"
      className="w-full rounded-none border-none bg-dark text-white shadow-none"
    >
      <StylesSectionLabel>Size</StylesSectionLabel>
      <AccordionContent className="grid h-full w-full grid-cols-[44px_1fr_44px_1fr] gap-2 rounded-none border-t border-border bg-dark p-2 font-veryLight">
        <CreateStylesSizeStandard />
      </AccordionContent>
    </AccordionItem>
  )
}
