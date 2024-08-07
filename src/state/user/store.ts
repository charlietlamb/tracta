import { create } from 'zustand'

type UserStore = {
  user: User | null
  setUser: (value: User | null) => void
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (value: User | null) => set({ user: value }),
}))
