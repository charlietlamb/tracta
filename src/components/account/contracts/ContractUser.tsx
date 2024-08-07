import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

export default function ContractUser({ user }: { user: User }) {
  const router = useRouter()
  const pathname = usePathname()
  const isAccount = pathname === '/account' || pathname.includes('/user/')
  if (isAccount) return null

  return (
    <div
      className="relative mr-2 size-12 cursor-pointer rounded-full"
      onClick={(e) => {
        e.stopPropagation()
        router.push(`/user/${user.id}`)
      }}
    >
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Image
              src={user.image || 'https://avatar.iran.liara.run/public'}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="hover:translate-x-boxShadowXSmall hover:translate-y-boxShadowYSmall rounded-full border-2 border-black shadow-small transition hover:shadow-none"
              alt={`${user?.first_name || 'loading...'} ${user?.last_name || 'loading...'} tracta profile image`}
            />
          </TooltipTrigger>
          <TooltipContent>
            {`${user?.first_name || 'loading...'} ${user?.last_name || 'loading...'}`}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}
