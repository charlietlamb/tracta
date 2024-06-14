import Image from 'next/image'
import AccountProfileActions from '../AccountProfileActions'
import { useUser } from '@/lib/slice/user/useUser'
import UserProfileActions from '@/components/user/profile/UserProfileActions'

export default function Profile({ user }: { user: User }) {
  const appUser = useUser()
  const own = appUser?.id === user.id
  return (
    <div className="relative flex flex-col items-center gap-4 overflow-hidden p-4">
      <div className="relative size-20 rounded-full lg:size-24">
        <Image
          src={user.image}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="rounded-full border-2 border-black shadow-base"
          alt={`${user?.first_name || 'loading...'} ${user?.last_name || 'loading...'} tracta profile image`}
        />
      </div>
      <div className="flex items-center gap-4">
        <div className="flex flex-col items-center justify-center gap-1">
          <div className="text-lg font-heading leading-none">
            {user?.first_name || 'loading...'} {user?.last_name || 'loading...'}
          </div>
          <div className="text-sm leading-none">
            {user?.email || 'loading...'}
          </div>
        </div>
        {own ? <AccountProfileActions /> : <UserProfileActions />}
      </div>
    </div>
  )
}
