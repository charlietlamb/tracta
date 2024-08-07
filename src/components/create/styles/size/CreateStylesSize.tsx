import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import CreateStylesSizeStandard from '../size/CreateStylesSizeStandard'

export default function CreateStylesSize() {
  return (
    <AccordionItem
      value="size"
      className="bg-dark w-full rounded-none border-none text-white shadow-none"
    >
      <AccordionTrigger className="bg-dark rounded-none border-none p-2 py-0 font-larken">
        Size
      </AccordionTrigger>
      <AccordionContent className="bg-dark font-veryLight grid h-full w-full grid-cols-[44px_1fr_44px_1fr] gap-2 rounded-none p-2">
        <CreateStylesSizeStandard />
      </AccordionContent>
    </AccordionItem>
  )
}
