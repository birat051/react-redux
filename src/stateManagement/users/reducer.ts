import { FETCH_USERS, FETCH_USERS_FAILURE, FETCH_USERS_SUCCESS, userActionType } from "./actions";


export interface Users
{
    loading: boolean,
    users: string[],
    error: string
}
const initState:Users={
    loading: false,
    users: [],
    error: ''
}

export function userReducer(state=initState,action:userActionType):Users
{
    switch(action.type)
    {
        case FETCH_USERS:
            return {
                ...state, loading: true
            }
            case FETCH_USERS_SUCCESS:
                const usersArray = Array.isArray(action.payload) ? action.payload : [action.payload];
                return {
                    ...state, users: usersArray , loading: false , error: ''
                }
            case FETCH_USERS_FAILURE:
                const errorString = Array.isArray(action.payload) ? action.payload.join(', ') : action.payload;
                return {
                    ...state,error: errorString , loading: false , users: []
                }
            default:
                return state
    }
}