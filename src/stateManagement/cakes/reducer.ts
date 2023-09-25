import { ActionType, BUY_CAKE } from "./actions"

const initState = {
    numOfCakes: 10
}

export const cakesReducer = (state = initState,action:ActionType)=>{
    switch(action.type)
    {
        case BUY_CAKE:
            return {
                ...state, numOfCakes: state.numOfCakes-1
            }
        default:
            return state
    }

}