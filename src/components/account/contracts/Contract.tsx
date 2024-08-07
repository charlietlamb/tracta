'use client'

import { Button } from '@/components/ui/button'
import { getContractSaved } from '@/lib/get/account/contract/getContractSaved'
import { Bookmark, Dot } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { handleContractSavedClick } from './functions/handleContractSavedClick'
import { useRouter } from 'next/navigation'
import ContractUser from './ContractUser'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { useUserStore } from '@/state/user/store'
import { useAuthStore } from '@/state/auth/store'

export default function Contract({ contract }: { contract: ContractData }) {
  const [saved, setSaved] = useState(false)
  const [loading, setLoading] = useState(false)
  const user = useUserStore((state) => state.user)
  const router = useRouter()
  const { setOpen } = useAuthStore((state) => state)
  useEffect(() => {
    async function getContactSaved() {
      if (user) setSaved(await getContractSaved(user, contract))
    }
    getContactSaved()
  }, [])
  const tagArray = contract.tags.split('&')

  return (
    <div
      className="bg-dark text-light relative z-10 flex cursor-pointer flex-col divide-y-2 divide-black rounded-base border-2 border-black shadow-base transition"
      onClick={() => router.push(`/create?template=${contract.id}`)}
    >
      <div className="flex items-center justify-between p-2">
        <div className="flex items-center">
          <ContractUser user={contract.user} />
          <div className="flex flex-col gap-1">
            <h4 className="truncate font-larken text-2xl font-medium leading-none">
              {contract.title}
            </h4>
            <p className="truncate leading-none tracking-tight text-accent">
              {contract.description}
            </p>
          </div>
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
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
                    : setOpen(true)
                }}
                disabled={loading}
              >
                <Bookmark fill={saved ? '#000' : 'transparent'} />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Save Contract.</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="bg-darker flex items-center gap-1 overflow-x-auto p-2">
        {tagArray.map((t: string, index: number) => {
          return (
            <React.Fragment key={t}>
              <p key={t} className="rounded font-larken font-heading">
                {t}
              </p>
              {index !== tagArray.length - 1 && <Dot />}
            </React.Fragment>
          )
        })}
      </div>
    </div>
  )
}
