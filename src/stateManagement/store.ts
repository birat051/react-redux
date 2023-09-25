import { configureStore } from '@reduxjs/toolkit'
import { cakesReducer } from './cakes/reducer'
import { iceCreamReducer } from './icecreams/reducer'
// ...

const store = configureStore({
  reducer: {
    cakes: cakesReducer,
    iceCreams: iceCreamReducer
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch