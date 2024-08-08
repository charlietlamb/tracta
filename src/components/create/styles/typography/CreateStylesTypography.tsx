import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import CreateStylesTypographySize from './CreateStylesTypographySize'
import CreateStylesTypographyColor from './CreateStylesTypographyColor'
import CreateStylesTypographyAlign from './CreateStylesTypographyAlign'

export default function CreateStylesTypography() {
  return (
    <AccordionItem
      value="typography"
      className="bg-dark w-full rounded-none border-none text-white shadow-none"
    >
      <AccordionTrigger className="bg-dark rounded-none border-none p-2 py-0 font-larken">
        Typography
      </AccordionTrigger>
      <AccordionContent className="bg-dark font-veryLight grid h-full w-full grid-cols-[48px_1fr_48px_1fr] gap-2 rounded-none p-2">
        <CreateStylesTypographySize />
        <CreateStylesTypographyColor />
        <CreateStylesTypographyAlign />
      </AccordionContent>
    </AccordionItem>
  )
}
