import { Dispatch, SetStateAction, createContext, useContext } from 'react'

interface AccountContext {
  user: User
  setUser: Dispatch<SetStateAction<User>>
}

export const AccountContext = createContext<AccountContext | undefined>(
  undefined,
)
export function useAccountContext() {
  const context = useContext(AccountContext)
  if (!context) {
    throw new Error('useAccountContext must be used within a AccountProvider')
  }
  return context
}
