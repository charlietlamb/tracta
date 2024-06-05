import { createSlice } from '@reduxjs/toolkit'

export interface TexState {
  pdfUrl: '' | null
  compilerLog: '' | null
  showCompilerLog: boolean
}

const initialState: TexState = {
  pdfUrl: null,
  compilerLog: null,
  showCompilerLog: false,
}

const TexSlice = createSlice({
  name: 'tex',
  initialState,
  reducers: {
    setPdfUrl: (state, action) => {
      state.pdfUrl = action.payload
    },
    setCompilerLog: (state, action) => {
      state.compilerLog = action.payload
    },
    setShowCompilerLog: (state, action) => {
      state.showCompilerLog = action.payload
    },
  },
})

export const { setPdfUrl } = TexSlice.actions

export default TexSlice.reducer
