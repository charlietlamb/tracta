'use client'

import { useUserStore } from '@/state/user/store'
import { useEffect } from 'react'

export function UserProvider({
  children,
  user,
}: {
  children: React.ReactNode
  user: User | null
}) {
  const { setUser } = useUserStore((state) => state)
  useEffect(() => {
    setUser(user)
  }, [])
  return <>{children}</>
}
