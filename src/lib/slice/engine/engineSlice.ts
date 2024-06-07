import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface EngineState {
  engineStatus: number
}

const initialState: EngineState = {
  engineStatus: 1,
}

const engineSlice = createSlice({
  name: 'engine',
  initialState,
  reducers: {
    setEngineStatus: (state, action: PayloadAction<number>) => {
      state.engineStatus = action.payload
    },
    setNotReadyEngineStatus: (state) => {
      state.engineStatus = 1
    },
    setReadyEngineStatus: (state) => {
      state.engineStatus = 2
    },
    setBusyEngineStatus: (state) => {
      state.engineStatus = 3
    },
    setErrorEngineStatus: (state) => {
      state.engineStatus = 4
    },
  },
})

export const {
  setEngineStatus,
  setNotReadyEngineStatus,
  setReadyEngineStatus,
  setBusyEngineStatus,
  setErrorEngineStatus,
} = engineSlice.actions

export default engineSlice.reducer
