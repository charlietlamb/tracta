import Faq from '@/components/faq/faq'
import Community from '@/components/general/community/community'
import Features from '@/components/general/features/features'
import Hero from '@/components/general/hero/hero'
import Pricing from '@/components/general/pricing/pricing'
import HeroMarquee from './hero/HeroMarquee'

export default function Home() {
  return (
    <div className="flex flex-col divide-y-2 divide-black">
      <Hero />
      <Features />
      <HeroMarquee />
      <Community />
      <Faq />
      <HeroMarquee />
      <Pricing />
    </div>
  )
}
