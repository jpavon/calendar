import * as actions from 'data/user/actions'

export interface User {
    id: number
    email: string
}

export type Action = ReturnType<typeof actions[keyof typeof actions]>
