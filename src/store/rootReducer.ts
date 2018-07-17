import { combineReducers } from 'redux'

import user from 'data/user/reducers'
import slots from 'data/slots/reducers'
import ui from 'data/ui/reducers'

const rootReducer = combineReducers({ user, ui, slots })

export default rootReducer
