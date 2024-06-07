import Image from 'next/image'

export default function CreateComponent({
  component,
}: {
  component: Component
}) {
  return (
    <div
      className="relative z-10 flex cursor-pointer flex-col divide-y-2 divide-black border-2 border-black bg-white shadow-base transition hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
      onClick={() => console.log('add to contract')}
    >
      <div className="bg-bg p-2">
        <h4 className="text-2xl font-heading">{component.title}</h4>
        <p>{component.description}</p>
      </div>
      <div className="size-40 w-full">
        <Image
          //   src={component.image}
          src={''}
          alt={component.title}
          width={40}
          height={40}
        />
      </div>
    </div>
  )
}
