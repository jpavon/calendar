import { combineEpics } from 'redux-observable'

import epics from 'data/epics'
import userEpic from 'data/user/epics'
import slotsEpic from 'data/slots/epics'

const rootEpic = combineEpics(...epics, ...userEpic, ...slotsEpic)

export default rootEpic
