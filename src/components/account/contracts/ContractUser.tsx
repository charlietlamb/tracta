import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

export default function ContractUser({ user }: { user: User }) {
  const router = useRouter()
  const pathname = usePathname()
  const isAccount = pathname === '/account' || pathname.includes('/user/')
  if (isAccount) return null

  return (
    <div className="flex w-full items-center gap-4 p-2">
      <div className="relative size-12 rounded-full lg:size-16">
        <Image
          src="https://avatar.iran.liara.run/public"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="rounded-full border-2 border-black shadow-base"
          alt={`${user?.first_name || 'loading...'} ${user?.last_name || 'loading...'} tracta profile image`}
        />
      </div>

      <div className="flex flex-col justify-center gap-1">
        <div className="text-lg font-heading leading-none">
          {user?.first_name || 'loading...'} {user?.last_name || 'loading...'}
        </div>
        <div className="text-sm leading-none">
          {user?.email || 'loading...'}
        </div>
      </div>
      <Button
        className="ml-auto"
        onClick={(e) => {
          e.stopPropagation()
          router.push(`/user/${user.id}`)
        }}
      >
        <ArrowRight />
      </Button>
    </div>
  )
}
