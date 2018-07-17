import { action } from 'typesafe-actions'

import constants from 'data/constants'

export const loadData = () => action(constants.LOAD_DATA)
