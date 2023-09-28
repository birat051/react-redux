export const FETCH_USERS='FETCH_USERS'
export const FETCH_USERS_SUCCESS='FETCH_USERS_SUCCESS'
export const FETCH_USERS_FAILURE='FETCH_USERS_FAILURE'


export type userActionType={
    type: string,
    payload: string[] | string
}

export function fetchUsersRequest()
{
    return {
        type: FETCH_USERS,
    }
}

export function fetchUsersSuccess(payload:string[]): userActionType
{
    return {
        type: FETCH_USERS_SUCCESS,
        payload
    }
}

export function fetchUsersFailure(payload:string): userActionType
{
    return {
        type: FETCH_USERS_FAILURE,
        payload
    }
}