'use client'

import { useDispatch } from 'react-redux'
import { setOpen } from './authSlice'

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const dispatch = useDispatch()
  dispatch(setOpen(false))
  return <>{children}</>
}
