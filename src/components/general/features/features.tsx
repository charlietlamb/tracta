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
      <section className="flex flex-col gap-8 bg-bg py-20 font-base lg:gap-24 lg:py-24">
        <h2 className="subheading px-5 text-center">
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

                <h4 className="font-larken mt-2 text-xl font-heading">
                  {feature.title}
                </h4>
                <p>{feature.text}</p>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
