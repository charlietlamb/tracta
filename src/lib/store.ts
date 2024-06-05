import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slice/user/userSlice'
import texReducer from './slice/tex/texSlice'
import engineReducer from './slice/engine/engineSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      user: userReducer,
      tex: texReducer,
      engine: engineReducer,
    },
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
