import { action } from 'typesafe-actions'

import constants from 'data/slots/constants'
import { Slot, SlotBookPost } from 'data/slots/types'

// get slots
export const getSlotsRequest = (datetime: string) =>
    action(constants.GET_SLOTS_REQUEST, { datetime })
export const getSlotsSuccess = (data: Slot[], datetime: string) =>
    action(constants.GET_SLOTS_SUCCESS, data, { datetime })
// handle error not implemented in ui
export const getSlotsFailure = () => action(constants.GET_SLOTS_FAILURE)

// change week
export const changeWeek = (datetime: string) =>
    action(constants.CHANGE_WEEK, { datetime })

// change week
export const postBookSlotRequest = (slot: SlotBookPost) =>
    action(constants.POST_BOOK_SLOT_REQUEST, { slot })
export const postBookSlotSuccess = (Start: string) =>
    action(constants.POST_BOOK_SLOT_SUCCESS, { Start })
// handle error not implemented in ui
export const postBookSlotFailure = () =>
    action(constants.POST_BOOK_SLOT_FAILURE)
