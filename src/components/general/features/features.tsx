import { features } from '@/lib/data/features/features'
import Marquee from 'react-fast-marquee'
import HeroMarquee from '../hero/HeroMarquee'
import Image from 'next/image'

export default function Features() {
  const icons = ['star', 'star2', 'star3', 'star4', 'plus', 'pentagon']

  const feature = {
    title: 'Feature',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque reiciendis ab similique expedita quaerat nesciunt.',
  }

  return (
    <div>
      <section className="border-t-2 border-t-black bg-bg py-20 font-base lg:py-[100px]">
        <h2 className="mb-14 px-5 text-center text-2xl font-heading md:text-3xl lg:mb-20 lg:text-4xl">
          Create beautiful contracts with ease.
        </h2>

        <div className="mx-auto grid w-container max-w-full grid-cols-1 gap-5 px-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => {
            return (
              <div
                className="flex flex-col gap-3 rounded-base border-2 border-black bg-white p-5 shadow-base"
                key={i}
              >
                <Image
                  className="h-12 w-12 rounded-base"
                  src={`/neobrutalism-icons/${icons[i]}.svg`}
                  alt="icon"
                  width={48}
                  height={48}
                />

                <h4 className="mt-2 text-xl font-heading">{feature.title}</h4>
                <p>{feature.text}</p>
              </div>
            )
          })}
        </div>
      </section>
      <HeroMarquee />
    </div>
  )
}
