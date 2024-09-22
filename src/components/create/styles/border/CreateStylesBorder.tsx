import { AccordionContent, AccordionItem } from '@/components/ui/accordion'
import CreateStylesBorderRadius from './CreateStylesBorderRadius'
import StylesSectionLabel from '../StylesSectionLabel'
import CreateStylesBorderStyle from './CreateStylesBorderStyle'

export default function CreateStylesBorder() {
  return (
    <AccordionItem
      value="border"
      className="w-full rounded-none border-none bg-dark text-white shadow-none"
    >
      <StylesSectionLabel>Border</StylesSectionLabel>
      <AccordionContent className="flex h-full w-full flex-col rounded-none border-t border-border bg-dark p-2 font-veryLight">
        <div className="grid grid-cols-[48px_1fr] gap-2 rounded-none">
          <CreateStylesBorderRadius />
        </div>
        <CreateStylesBorderStyle />
      </AccordionContent>
    </AccordionItem>
  )
}
