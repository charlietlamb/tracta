'use client'

import { useDispatch } from 'react-redux'
import { setUser } from './userSlice'
import { getUser } from '@/lib/get/user/getUser'

export function UserProvider({
  children,
  user,
}: {
  children: React.ReactNode
  user: User | null
}) {
  const dispatch = useDispatch()
  dispatch(setUser(user))
  return <>{children}</>
}
