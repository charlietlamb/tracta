import { createSlice } from '@reduxjs/toolkit'
import { Dispatch, SetStateAction } from 'react'

export interface AuthState {
  open: boolean
}

const initialState: AuthState = {
  open: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setOpen: (state, action) => {
      state.open = action.payload
    },
  },
})

export const { setOpen } = authSlice.actions

export default authSlice.reducer
