import { Dispatch, SetStateAction, createContext, useContext } from 'react'

interface AccountEditContext {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

export const AccountEditContext = createContext<AccountEditContext | undefined>(
  undefined,
)
export function useAccountEditContext() {
  const context = useContext(AccountEditContext)
  if (!context) {
    throw new Error(
      'useAccountEditContext must be used within a AccountEditProvider',
    )
  }
  return context
}
