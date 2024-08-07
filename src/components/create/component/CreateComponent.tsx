import Image from 'next/image'
import { addComponent } from '@/lib/contract/functions/add/addComponent'

export default function CreateComponent({
  component,
}: {
  component: Component
}) {
  return (
    <div
      className="relative z-10 flex cursor-pointer flex-col divide-y-2 divide-black rounded-base border-2 border-black bg-white shadow-base transition hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
      // onClick={() =>
      //   addComponent(
      //     json,
      //     setJson,
      //     component,
      //     key,
      //     setAddOpen,
      //     setLastChange,
      //     sidebarSelected === null,
      //   )
      // } TODO: add to store
    >
      <div className="bg-bg p-2">
        <h4 className="font-larken text-2xl font-bold">{component.title}</h4>
        <p>{component.description}</p>
      </div>
      <div className="bg-dark size-40 w-full text-white">
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
