import { Dispatch, SetStateAction, createContext, useContext } from 'react'
import { CreateMode } from '../types/CreateMode'

interface CreateContext {
  json: Contract
  setJson: Dispatch<SetStateAction<Contract>>
  key: string
  setKey: Dispatch<SetStateAction<string>>
  newKey: string
  setNewKey: Dispatch<SetStateAction<string>>
  tracta: string | null
  setTracta: Dispatch<SetStateAction<string | null>>
  values: string[] | null
  setValues: Dispatch<SetStateAction<string[] | null>>
  title: string
  setTitle: Dispatch<SetStateAction<string>>
  addOpen: boolean
  setAddOpen: Dispatch<SetStateAction<boolean>>
  varOpen: boolean
  setVarOpen: Dispatch<SetStateAction<boolean>>
  settingsOpen: boolean
  setSettingsOpen: Dispatch<SetStateAction<boolean>>
  sidebarSelected: string | null
  setSidebarSelected: Dispatch<SetStateAction<string | null>>
  lastChange: number
  setLastChange: Dispatch<SetStateAction<number>>
  pdfUrl: string | null
  setPdfUrl: Dispatch<SetStateAction<string | null>>
  loading: boolean
  setLoading: Dispatch<SetStateAction<boolean>>
}

export const CreateContext = createContext<CreateContext | undefined>(undefined)
export function useCreateContext() {
  const context = useContext(CreateContext)
  if (!context) {
    throw new Error('useCreateContext must be used within a CreateProvider')
  }
  return context
}
