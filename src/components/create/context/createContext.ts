import { createContext, useContext } from 'react'
import { CreateMode } from '../types/CreateMode'

interface CreateContext {
    mode: CreateMode
}

export const CreateContext = createContext<CreateContext | undefined>(
  undefined
)
export function useCreateContext() {
  const context = useContext(CreateContext)
  if (!context) {
    throw new Error('useCreateContext must be used within a CreateProvider')
  }
  return context
}