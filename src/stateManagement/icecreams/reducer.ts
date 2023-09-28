import { ActionType } from "../cakes/actions"
import { BUY_ICECREAM } from "./actions"

const initState = {
    numOfIcecreams: 10
}

export interface IceCreamState {
    numOfIcecreams: number;
}

export const iceCreamReducer = (state = initState,action:ActionType):IceCreamState=>{
    switch(action.type)
    {
        case BUY_ICECREAM:
            return {
                ...state, numOfIcecreams: state.numOfIcecreams-1
            }
        default:
            return state
    }
}