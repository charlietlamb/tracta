import { Button } from '@/components/ui/button'
import { getContractSaved } from '@/lib/get/account/contract/getContractSaved'
import { useUser } from '@/lib/slice/user/useUser'
import { Bookmark, Dot } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { handleContractSavedClick } from './functions/handleContractSavedClick'
import { useRouter } from 'next/navigation'
import ContractUser from './ContractUser'
import { useAppDispatch } from '@/lib/hooks'
import { setOpen } from '@/lib/slice/auth/authSlice'

export default function Contract({ contract }: { contract: ContractData }) {
  const [saved, setSaved] = useState(false)
  const [loading, setLoading] = useState(false)
  const user = useUser()
  const router = useRouter()
  const dispatch = useAppDispatch()
  useEffect(() => {
    async function getContactSaved() {
      if (user) setSaved(await getContractSaved(user, contract))
    }
    getContactSaved()
  }, [])
  const tagArray = contract.tags.split('&')
  return (
    <div
      className="relative z-10 flex cursor-pointer flex-col divide-y-2 divide-black border-2 border-black bg-white shadow-base transition hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
      onClick={() => router.push(`/create?template=${contract.id}`)}
    >
      <div className="flex items-center justify-between bg-bg p-2">
        <div>
          <h4 className="text-2xl font-heading">{contract.title}</h4>
          <p>{contract.description}</p>
        </div>
        <Button
          onClick={(e) => {
            e.stopPropagation()
            user
              ? handleContractSavedClick(
                  user,
                  contract,
                  saved,
                  setSaved,
                  setLoading,
                )
              : dispatch(setOpen(true))
          }}
          disabled={loading}
        >
          <Bookmark fill={saved ? '#000' : 'transparent'} />
        </Button>
      </div>
      <div className="flex items-center gap-1 overflow-x-auto p-2">
        {tagArray.map((t: string, index: number) => {
          return (
            <React.Fragment key={t}>
              <p key={t} className="rounded p-1 font-heading">
                {t}
              </p>
              {index !== tagArray.length - 1 && <Dot />}
            </React.Fragment>
          )
        })}
      </div>
      <ContractUser user={contract.user} />
    </div>
  )
}
