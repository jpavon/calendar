import constants from 'data/slots/constants'
import { RootState } from 'data/types'
import { Action } from 'data/slots/types'
import { getCurrentWeek } from 'utils/date'

const initialState: Readonly<RootState['slots']> = {
    entities: null,
    selectedWeek: getCurrentWeek()
}

const slots = (state = initialState, action: Action): RootState['slots'] => {
    switch (action.type) {
        // case constants.GET_SLOTS_REQUEST:
        //     return {
        //         ...state
        //     }

        case constants.GET_SLOTS_SUCCESS:
            return {
                ...state,
                entities: {
                    ...state.entities,
                    [action.meta.datetime]: action.payload
                }
            }

        // handle error not implemented in ui
        // case constants.GET_SLOTS_FAILURE:
        //     return {
        //         ...state
        //     }

        case constants.CHANGE_WEEK:
            return {
                ...state,
                selectedWeek: action.payload.datetime
            }

        // case constants.POST_BOOK_SLOT_REQUEST:
        //     return {
        //         ...state
        //     }

        case constants.POST_BOOK_SLOT_SUCCESS:
            return {
                ...state,
                entities: {
                    ...state.entities,
                    [state.selectedWeek]: state.entities![
                        state.selectedWeek
                    ].map((slot) => {
                        if (slot.Start !== action.payload.Start) {
                            return slot
                        }
                        return {
                            ...slot,
                            Taken: true
                        }
                    })
                }
            }

        // handle error not implemented in ui
        // case constants.POST_BOOK_SLOT_FAILURE:
        //     return {
        //         ...state
        //     }

        default:
            return state
    }
}

export default slots
