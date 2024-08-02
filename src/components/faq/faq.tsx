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
    <div>
      <section className=" bg-bg py-20 font-base lg:py-24">
        <h2 className="subheading mb-14 px-5 text-center lg:mb-20">
          Frequently asked questions
        </h2>

        <div className="mx-auto grid w-[700px] max-w-full px-5">
          <Accordion className="text-base sm:text-lg" type="single" collapsible>
            {faq.map((f, i) => (
              <AccordionItem className="mb-2" value={`item-${i}`}>
                <AccordionTrigger className="font-larken">
                  {f.question}
                </AccordionTrigger>
                <AccordionContent>{f.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  )
}
