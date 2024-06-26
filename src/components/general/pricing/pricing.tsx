import MovingGrid from '@/components/grid/MovingGrid'
import PricingPlan from './pricing-plan'

export default function Pricing() {
  return (
    <section className="relative inset-0 flex w-full flex-col items-center justify-center overflow-hidden bg-white font-base">
      <MovingGrid />
      <div className="relative z-10 mx-auto w-container max-w-full px-5 py-20 lg:py-[100px]">
        <h2 className="mb-14 text-center text-2xl font-heading md:text-3xl lg:mb-20 lg:text-4xl">
          Pricing
        </h2>
        <div className="grid grid-cols-3 gap-8 w900:mx-auto w900:w-2/3 w900:grid-cols-1 w500:w-full">
          <PricingPlan
            planName="Free"
            description="Let's get started."
            price="0"
            perks={[
              '5 Contracts At One Time',
              'Community Templates',
              '48-hour support response time',
            ]}
          />
          <PricingPlan
            planName="Basic"
            description="Essential for professionals."
            price="10"
            perks={['50 Projects', 'Remove Watermark', 'Share Templates']}
            mostPopular
          />
          <PricingPlan
            planName="Enterprise"
            description="For businesses that need more."
            price="50"
            perks={['Export LaTeX', 'Advanced Analytics', 'Custom Branding']}
          />
        </div>
      </div>
    </section>
  )
}
