'use client'

import MovingGrid from '@/components/grid/MovingGrid'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Hero() {
  const router = useRouter()
  return (
    <div
      className="relative inset-0 flex w-full flex-col items-center justify-center overflow-hidden bg-dark text-light"
      style={{ minHeight: 'calc(100vh - 58px)' }}
    >
      <MovingGrid />
      <div className="relative z-10 mx-auto flex w-container max-w-full flex-col items-center gap-4 px-5 py-[110px] text-center md:gap-8 lg:py-[150px]">
        <div className="flex w-full flex-col items-center gap-2">
          <h1 className="h1-text">
            Start creating documents
            <br />
            the better way.
          </h1>
          <p className="h2-text tracking-tighter text-accent">
            Create your first doc within{' '}
            <span className="underline">minutes</span>.
          </p>
        </div>
        <div className="flex gap-4 md:gap-8">
          <Button
            size="lg"
            variant="hero"
            className="w-fit bg-dark text-base font-light text-light md:text-lg lg:h-14 lg:text-xl"
            onClick={() => router.push('/create')}
          >
            Learn More
          </Button>
          <Button
            size="lg"
            variant="hero"
            className="w-fit bg-dark text-base font-light text-light md:text-lg lg:h-14 lg:text-xl"
            onClick={() => router.push('/create')}
          >
            Get started
          </Button>
        </div>
      </div>
    </div>
  )
}
