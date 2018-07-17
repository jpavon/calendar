import constants from 'data/ui/constants'
import { RootState } from 'data/types'
import { Action } from 'data/ui/types'

const initialState: Readonly<RootState['ui']> = {
    isLoading: true
}

const user = (state = initialState, action: Action): RootState['ui'] => {
    switch (action.type) {
        case constants.SHOW_LOADING:
            return {
                ...state,
                isLoading: true
            }

        case constants.HIDE_LOADING:
            return {
                ...state,
                isLoading: false
            }

        default:
            return state
    }
}

export default user
