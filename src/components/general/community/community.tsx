'ues client'

import MovingGrid from '@/components/grid/MovingGrid'
import { faker } from '@faker-js/faker'

export default function Community() {
  const review = () => {
    return {
      pfp: faker.image.avatar(),
      fullName: faker.person.fullName(),
      jobTitle: faker.person.jobTitle(),
      review: faker.lorem.sentences({ min: 1, max: 3 }),
    }
  }

  return (
    <section className="bg-dark text-light relative inset-0 flex w-full flex-col items-center justify-center overflow-hidden font-base">
      <MovingGrid />
      <div className="relative z-10 mx-auto flex w-container max-w-full flex-col gap-8 px-5 py-20 lg:py-24">
        <div className="mb-14 flex flex-col items-center gap-2">
          <h2 className="subheading text-light px-5 text-center">
            Loved by our community.
          </h2>
          <h4 className="h2-text tracking-tight text-accent">
            Revolutionize your document creation process with tracta.
          </h4>
        </div>
        <div className="grid grid-cols-3 gap-4 lg:gap-8 w900:grid-cols-1 w900:gap-0">
          {[
            [review(), review()],
            [review(), review(), review()],
            [review(), review()],
          ].map((card, index) => (
            <div className="group flex flex-col justify-center" key={index}>
              {card.map(({ jobTitle, pfp, fullName, review }, index) => (
                <div
                  className="bg-dark shadow-baseAccent mb-4 min-h-48 w-full rounded-base border-2 border-accent p-5 lg:mb-8 w900:mx-auto w900:min-h-20 w900:w-2/3 w500:w-full"
                  key={index}
                >
                  <div className="flex items-center gap-5">
                    <img
                      className="h-12 w-12 rounded-base border-2 border-black"
                      src={pfp}
                      alt="pfp"
                    />

                    <div>
                      <h4 className="font-larken text-lg font-heading">
                        {fullName}
                      </h4>
                      <p className="text-sm font-base text-accent">
                        {jobTitle}
                      </p>
                    </div>
                  </div>
                  <div className="mt-5">{review}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
