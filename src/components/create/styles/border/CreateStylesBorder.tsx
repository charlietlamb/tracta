import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import CreateStylesBorderRadius from './CreateStylesBorderRadius'

export default function CreateStylesBorder() {
  return (
    <AccordionItem
      value="border"
      className="bg-dark w-full rounded-none border-none text-white shadow-none"
    >
      <AccordionTrigger className="bg-dark rounded-none border-none p-2 py-0 font-larken">
        Border
      </AccordionTrigger>
      <AccordionContent className="bg-dark font-veryLight flex h-full w-full flex-col gap-2 rounded-none p-2">
        <div className="grid grid-cols-[48px_1fr] gap-2 rounded-none">
          <CreateStylesBorderRadius />
        </div>
        <div className="grid grid-cols-2 gap-2 rounded-none"></div>
      </AccordionContent>
    </AccordionItem>
  )
}
