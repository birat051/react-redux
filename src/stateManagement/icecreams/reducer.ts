import { ActionType } from "../cakes/actions"
import { BUY_ICECREAM } from "./actions"

const initState = {
    numOfIcecreams: 10
}

export const iceCreamReducer = (state = initState,action:ActionType)=>{
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