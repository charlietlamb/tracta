'use client'

import { useState } from 'react'
import { AccountContext } from './context/accountContext'
import AccountContracts from './contracts/AccountContracts'
import Profile from './profile/Profile'
import Loader from '../general/loading/Loader'
import { useSetUser } from './hooks/useSetUser'

export default function Account({ userId }: { userId: string }) {
  const [user, setUser] = useState<User>()
  useSetUser(userId, setUser)
  if (!user) return <Loader large />
  return (
    <AccountContext.Provider value={{ user, setUser }}>
      <div
        style={{ minHeight: 'calc(100vh - 58px)' }}
        className="flex h-full w-full flex-col divide-y-4 divide-black"
      >
        <Profile user={user} />
        <AccountContracts />
      </div>
    </AccountContext.Provider>
  )
}
