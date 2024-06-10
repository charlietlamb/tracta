import { Button } from '@/components/ui/button'
import { getContractSaved } from '@/lib/get/account/contract/getContractSaved'
import { useUser } from '@/lib/slice/user/useUser'
import { Bookmark } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { handleContractSavedClick } from './functions/handleContractSavedClick'

export default function Contract({ contract }: { contract: ContractData }) {
  const [saved, setSaved] = useState(false)
  const [loading, setLoading] = useState(false)
  const user = useUser()
  useEffect(() => {
    async function getContactSaved() {
      if (user) setSaved(await getContractSaved(user, contract))
    }
    getContactSaved()
  })
  return (
    <div
      className="relative z-10 flex cursor-pointer flex-col divide-y-2 divide-black border-2 border-black bg-white shadow-base transition hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
      onClick={() => console.log('add to contract')}
    >
      <div className="flex items-center justify-between bg-bg p-2">
        <div>
          <h4 className="text-2xl font-heading">{contract.title}</h4>
          <p>{contract.description}</p>
        </div>
        <Button
          onClick={() =>
            handleContractSavedClick(
              user,
              contract,
              saved,
              setSaved,
              setLoading,
            )
          }
          disabled={loading}
        >
          <Bookmark fill={saved ? '#000' : 'transparent'} />
        </Button>
      </div>
      <div className="size-40 w-full">
        <Image
          //   src={component.image}
          src={''}
          alt={contract.title}
          width={40}
          height={40}
        />
      </div>
    </div>
  )
}
