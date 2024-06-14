'use client'

import { getUser } from '@/lib/get/user/getUser'
import { useEffect, useState } from 'react'
import Loader from '../general/loading/Loader'
import { UserContext } from './context/userContext'
import UserContracts from './contract/UserContracts'
import Profile from '../account/profile/Profile'

export default function User({ userId }: { userId: string }) {
  const [user, setUser] = useState(null)
  useEffect(() => {
    async function fetchUser() {
      setUser(await getUser(userId))
    }
    fetchUser()
  }, [])
  if (!user) return <Loader />

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div
        style={{ minHeight: 'calc(100vh - 58px)' }}
        className="flex h-full w-full flex-col divide-y-4 divide-black"
      >
        <Profile user={user} />
        <UserContracts />
      </div>
    </UserContext.Provider>
  )
}
