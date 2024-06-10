'use client'

import { useState } from 'react'
import { AccountContext } from './context/accountContext'
import AccountContracts from './contracts/AccountContracts'
import AccountProfile from './profile/AccountProfile'

export default function Account({ userInit }: { userInit: User }) {
  const [user, setUser] = useState<User>(JSON.parse(userInit.value))
  return (
    <AccountContext.Provider value={{ user, setUser }}>
      <div
        style={{ minHeight: 'calc(100vh - 58px)' }}
        className="flex h-full w-full flex-col divide-y-4 divide-black"
      >
        <AccountProfile />
        <AccountContracts />
      </div>
    </AccountContext.Provider>
  )
}
