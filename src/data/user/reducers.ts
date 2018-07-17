import constants from 'data/user/constants'
import { RootState } from 'data/types'
import { Action } from 'data/user/types'
import { STORE_API_KEY } from 'api'

const initialState: Readonly<RootState['user']> = {
    entity: null,
    apiKey: localStorage.getItem(STORE_API_KEY)
}

const user = (state = initialState, action: Action): RootState['user'] => {
    switch (action.type) {
        // case constants.AUTH_USER_REQUEST:
        //     return {
        //         ...state
        //     }

        case constants.AUTH_USER_SUCCESS:
            return {
                ...state,
                apiKey: action.payload.apiKey
            }

        // handle error not implemented in ui
        // case constants.AUTH_USER_FAILURE:
        //     return {
        //         ...state
        //     }

        // case constants.GET_USER_REQUEST:
        //     return {
        //         ...state
        //     }

        case constants.GET_USER_SUCCESS:
            return {
                ...state,
                entity: action.payload
            }

        // handle error not implemented in ui
        // case constants.GET_USER_FAILURE:
        //     return {
        //         ...state
        //     }

        default:
            return state
    }
}

export default user
