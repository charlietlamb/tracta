import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import CreateStylesTypographySize from './CreateStylesTypographySize'
import CreateStylesTypographyColor from './CreateStylesTypographyColor'
import CreateStylesTypographyAlign from './CreateStylesTypographyAlign'
import StylesSectionLabel from '../StylesSectionLabel'

export default function CreateStylesTypography() {
  return (
    <AccordionItem
      value="typography"
      className="w-full rounded-none border-none bg-dark text-white shadow-none"
    >
      <StylesSectionLabel>Typography</StylesSectionLabel>
      <AccordionContent className="grid h-full max-w-full grid-cols-[44px_1fr_44px_1fr] gap-2 rounded-none border-t border-border bg-dark p-2 font-veryLight">
        <CreateStylesTypographySize />
        <CreateStylesTypographyColor />
        <CreateStylesTypographyAlign />
      </AccordionContent>
    </AccordionItem>
  )
}
