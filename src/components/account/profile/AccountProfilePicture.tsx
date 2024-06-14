'use client'

import Image from 'next/image'
import { useAccountContext } from '../context/accountContext'

export default function AccountProfilePicture() {
  const { user } = useAccountContext()
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative size-16 rounded-full lg:size-24">
        <Image
          src="https://avatar.iran.liara.run/public"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="rounded-full border-2 border-black shadow-base"
          alt={`${user?.first_name || 'loading...'} ${user?.last_name || 'loading...'} tracta profile image`}
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-1">
        <div className="text-lg font-heading leading-none">
          {user?.first_name || 'loading...'} {user?.last_name || 'loading...'}
        </div>
        <div className="text-sm leading-none">
          {user?.email || 'loading...'}
        </div>
      </div>
    </div>
  )
}
