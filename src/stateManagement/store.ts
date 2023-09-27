import { configureStore } from '@reduxjs/toolkit'
import { cakesReducer } from './cakes/reducer'
import { iceCreamReducer } from './icecreams/reducer'
import logger from 'redux-logger'


const store = configureStore({
  reducer: {
    cakes: cakesReducer,
    iceCreams: iceCreamReducer
  },
  middleware:[logger]
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store