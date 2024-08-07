import { features } from '@/lib/data/features/features'
import Image from 'next/image'

export default function Features() {
  const icons = ['star', 'star2', 'star3', 'star4', 'plus', 'pentagon']

  const feature = {
    title: 'Feature',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque reiciendis ab similique expedita quaerat nesciunt.',
  }

  return (
    <div className="bg-light relative">
      <div className="bg-dot-dark/50 animate-pulseSlow absolute inset-0" />
      <div className=" relative z-10 flex flex-col gap-8 py-20 font-base lg:gap-24 lg:py-24">
        <div className="flex flex-col items-center gap-2">
          <h2 className="subheading text-dark px-5 text-center">
            Create beautiful contracts with ease.
          </h2>
          <h4 className="h2-text tracking-tight text-accent">
            Revolutionize your document creation process with tracta.
          </h4>
        </div>
        <div className="mx-auto grid w-container max-w-full grid-cols-1 gap-5 px-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => {
            return (
              <div
                className="bg-dark text-light border-darker shadow-baseDarker flex flex-col gap-3 rounded-base border-2 p-5"
                key={i}
              >
                <Image
                  className="h-12 w-12 rounded-base"
                  src={`/neobrutalism-icons/${icons[i]}.svg`}
                  alt="icon"
                  width={48}
                  height={48}
                />

                <h4 className="mt-2 font-larken text-xl font-heading">
                  {feature.title}
                </h4>
                <p>{feature.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
