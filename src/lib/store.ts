import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slice/user/userSlice'
import authReducer from './slice/auth/authSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      user: userReducer,
      auth: authReducer,
    },
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
