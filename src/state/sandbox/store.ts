import { create } from 'zustand'

export interface SandboxState {
  mode: ToolbarMode
  setMode: (mode: ToolbarMode) => void
  width: number
  setWidth: (width: number) => void
  hover: string | null
  setHover: (hover: string | null) => void
}

export const useSandboxStore = create<SandboxState>((set) => ({
  mode: null,
  setMode: (mode: ToolbarMode) => set({ mode }),
  width: 0,
  setWidth: (width: number) => set({ width }),
  hover: null,
  setHover: (hover: string | null) => set({ hover }),
}))
