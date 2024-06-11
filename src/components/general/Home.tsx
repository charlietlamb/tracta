import Faq from '@/components/faq/faq'
import Community from '@/components/general/community/community'
import Features from '@/components/general/features/features'
import Hero from '@/components/general/hero/hero'
import Pricing from '@/components/general/pricing/pricing'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Community />
      <Faq />
      <Pricing />
    </>
  )
}
