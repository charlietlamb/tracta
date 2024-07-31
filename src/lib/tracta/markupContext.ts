import { Dispatch, SetStateAction, createContext, useContext } from 'react'

interface MarkupContext {
  length: number
  setLength: Dispatch<SetStateAction<number>>
}

export const MarkupContext = createContext<MarkupContext | undefined>(undefined)
export function useMarkupContext() {
  const context = useContext(MarkupContext)
  if (!context) {
    throw new Error('useMarkupContext must be used within a MarkupProvider')
  }
  return context
}
