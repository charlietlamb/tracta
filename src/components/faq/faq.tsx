import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import HeroMarquee from '../general/hero/HeroMarquee'
import { faq } from '@/lib/data/faq/faq'

export default function Faq() {
  return (
    <div className="bg-light relative">
      <div className="bg-dot-dark/50 animate-pulseSlow absolute inset-0" />
      <div className="relative z-10 py-20 font-base lg:py-24">
        <div className="mb-14 flex flex-col items-center gap-2">
          <h2 className="subheading text-dark px-5 text-center">
            Frequently Asked Questions.
          </h2>
          <h4 className="h2-text tracking-tight text-accent">
            Revolutionize your document creation process with tracta.
          </h4>
        </div>
        <div className="mx-auto grid w-[700px] max-w-full px-5">
          <Accordion
            className="flex flex-col gap-2 text-base sm:text-lg"
            type="single"
            collapsible
          >
            {faq.map((f, i) => (
              <AccordionItem value={`item-${i}`}>
                <AccordionTrigger className="font-larken">
                  {f.question}
                </AccordionTrigger>
                <AccordionContent className="text-light bg-accent">
                  {f.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  )
}
