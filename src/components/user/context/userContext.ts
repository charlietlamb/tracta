import { Dispatch, SetStateAction, createContext, useContext } from 'react'

interface UserContext {
  user: User
  setUser: Dispatch<SetStateAction<User>>
}

export const UserContext = createContext<UserContext | undefined>(undefined)
export function useUserContext() {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider')
  }
  return context
}
