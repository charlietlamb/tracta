import MovingGrid from '@/components/grid/MovingGrid'
import PricingPlan from './pricing-plan'

export default function Pricing() {
  return (
    <section className="relative inset-0 flex w-full flex-col items-center justify-center overflow-hidden bg-white font-base">
      <MovingGrid />
      <div className="relative z-10 mx-auto w-container max-w-full px-5 py-20 lg:py-[100px]">
        <h2 className="subheading mb-14 text-center lg:mb-20">Pricing</h2>
        <div className="grid grid-cols-3 gap-8 w900:mx-auto w900:w-2/3 w900:grid-cols-1 w500:w-full">
          <PricingPlan
            planName="Free"
            description="Let's get started."
            price="0"
            perks={[
              'Full creative control',
              'Unlimited Community Templates',
              'Watermark hidden on paid templates',
            ]}
          />
          <PricingPlan
            planName="Basic"
            description="Essential for professionals."
            price="10"
            perks={[
              'Unlimited Projects',
              'Remove Watermark',
              'Monetize Templates',
            ]}
            mostPopular
          />
          <PricingPlan
            planName="Enterprise"
            description="For businesses that need more."
            price="50"
            perks={[
              'Mass Variable Exports',
              'Advanced Analytics',
              'White Label',
            ]}
          />
        </div>
      </div>
    </section>
  )
}
