import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export default function PricingPlan({
  perks,
  mostPopular = false,
  planName,
  description,
  price,
}: {
  perks: string[]
  mostPopular?: boolean
  planName: string
  description: string
  price: string
}) {
  return (
    <div className="bg-dark text-light flex flex-col justify-between rounded-base border-2 border-accent p-5">
      <div>
        <div className="flex items-center justify-between">
          <h3 className="font-larken text-2xl font-heading">{planName}</h3>
          {mostPopular && (
            <span className="text-dark bg-light rounded-base border-2 border-black px-2 py-0.5 font-larken text-sm">
              Most popular
            </span>
          )}
        </div>
        <p className="mb-3 mt-1">{description}</p>
        <div>
          <span className="font-larken text-3xl font-heading">${price}</span>{' '}
          <span>/month</span>{' '}
        </div>
        <ul className="mt-8 flex flex-col gap-2">
          {perks.map((perk) => {
            return (
              <li key={perk} className="flex items-center gap-3">
                <Check className="shrink-0" size={20} /> {perk}
              </li>
            )
          })}
        </ul>
      </div>
      <Button
        size={mostPopular ? 'lg' : 'default'}
        className={cn('mt-12 w-full', mostPopular && 'text-light bg-accent')}
      >
        Buy Plan
      </Button>
    </div>
  )
}
