export interface ActionType {
    type: string,
    info?: string
}

export const BUY_CAKE='BUY_CAKE'

export function buyCake()
{
    return {
        type: BUY_CAKE,
        info: "Buy a cake from the store"
    }
}