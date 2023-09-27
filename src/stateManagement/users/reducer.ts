import { FETCH_USERS, FETCH_USERS_FAILURE, FETCH_USERS_SUCCESS, userActionType } from "./actions";

const initState={
    loading: false,
    users: [],
    error: ''
}

export function userReducer(state=initState,action:userActionType)
{
    switch(action.type)
    {
        case FETCH_USERS:
            return {
                ...state, loading: true
            }
            case FETCH_USERS_SUCCESS:
                return {
                    ...state, users: action.payload
                }
            case FETCH_USERS_FAILURE:
                return {
                    ...state,error: action.payload
                }
            default:
                return state
    }
}