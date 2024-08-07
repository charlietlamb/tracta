'use client'

import { getUser } from '@/lib/get/user/getUser'
import { useEffect, useState } from 'react'
import Loader from '../general/loading/Loader'
import { UserContext } from './context/userContext'
import UserContracts from './contract/UserContracts'
import Profile from '../account/profile/Profile'
import MovingGrid from '../grid/MovingGrid'

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
        className="divide-border bg-dark  flex h-full w-full flex-col divide-y"
      >
        <div className="relative z-10 flex w-full flex-col">
          <Profile user={user} />
          <UserContracts />
        </div>
        <MovingGrid />
      </div>
    </UserContext.Provider>
  )
}
