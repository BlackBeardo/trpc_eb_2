import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { api } from 'src/rtkQuery/main'

const middlewarePool = [api.middleware]

const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  reducer: {
    [api.reducerPath]: api.reducer
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat(middlewarePool)
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export default store

setupListeners(store.dispatch)
