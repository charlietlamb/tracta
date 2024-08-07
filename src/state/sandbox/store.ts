import { create } from 'zustand'

export interface SandboxState {
  mode: ToolbarMode
  setMode: (mode: ToolbarMode) => void
  width: number
  setWidth: (width: number) => void
}

export const useSandboxStore = create<SandboxState>((set) => ({
  mode: null,
  setMode: (mode: ToolbarMode) => set({ mode }),
  width: 0,
  setWidth: (width: number) => set({ width }),
}))
