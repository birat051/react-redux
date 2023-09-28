import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { CakeState, cakesReducer } from './cakes/reducer'
import { IceCreamState, iceCreamReducer } from './icecreams/reducer'
import logger from 'redux-logger'
import { Users, userReducer } from './users/reducer'

export interface RootState {
  icecream: IceCreamState;
  cake: CakeState;
  users: Users
}

const rootReducer = combineReducers<RootState>({
  icecream: iceCreamReducer,
  cake: cakesReducer,
  users: userReducer
});

const store = configureStore({
  reducer: rootReducer,
  middleware:[logger]
})


export type AppDispatch = typeof store.dispatch

export default store