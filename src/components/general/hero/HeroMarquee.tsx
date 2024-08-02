'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Marquee from 'react-fast-marquee'

export default function HeroMarquee() {
  const router = useRouter()
  return (
    <div onClick={() => router.push('/create')} className="h-fu cursor-pointer">
      <Marquee
        className="relative z-10 bg-white py-3 font-base sm:py-5"
        direction="right"
      >
        {Array(10)
          .fill('xd')
          .map((x, id) => {
            return (
              <div className="flex items-center" key={id}>
                <span className="subheading mx-10">
                  Create your first contract today for free.
                </span>
                <Image
                  className="w-[35px] sm:w-[45px]"
                  src={'/neobrutalism-icons/star3.svg'}
                  alt="star"
                  width={45}
                  height={45}
                />
              </div>
            )
          })}
      </Marquee>
    </div>
  )
}
