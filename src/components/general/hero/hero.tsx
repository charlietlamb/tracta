'use client'

import MovingGrid from '@/components/grid/MovingGrid'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Hero() {
  const router = useRouter()
  return (
    <div
      className="relative inset-0 flex w-full flex-col items-center justify-center overflow-hidden bg-white"
      style={{ minHeight: 'calc(100vh - 58px)' }}
    >
      <MovingGrid />
      <div className="relative z-10 mx-auto flex w-container max-w-full flex-col items-center gap-8 px-5 py-[110px] text-center lg:py-[150px]">
        <h1 className="text-3xl font-heading md:text-4xl lg:text-5xl">
          Start creating contracts <br />
          for your business.
        </h1>
        <p className="text-lg font-normal leading-relaxed md:text-xl lg:text-2xl lg:leading-relaxed">
          Create your first contract within minutes.
          <br /> Start{' '}
          <Link href="/create" className="font-heading underline">
            building
          </Link>{' '}
          now.
        </p>
        <Button
          size="lg"
          className="w-fit text-base font-heading md:text-lg lg:h-14 lg:text-xl"
          onClick={() => router.push('/create')}
        >
          Get started
        </Button>
      </div>
    </div>
  )
}
