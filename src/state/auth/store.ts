import { create } from 'zustand'

type AuthStore = {
  open: boolean
  setOpen: (value: boolean) => void
}

export const useAuthStore = create<AuthStore>((set) => ({
  open: false,
  setOpen: (value: boolean) => set({ open: value }),
}))
