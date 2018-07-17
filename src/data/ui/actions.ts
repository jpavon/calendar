import { action } from 'typesafe-actions'

import constants from 'data/ui/constants'

export const showLoading = () => action(constants.SHOW_LOADING)
export const hideLoading = () => action(constants.HIDE_LOADING)
