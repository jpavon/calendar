import { action } from 'typesafe-actions'

import constants from 'data/user/constants'
import { User } from 'data/user/types'

// auth user
export const authUserRequest = (data?: { email: string; password: string }) =>
    action(constants.AUTH_USER_REQUEST, data)
export const authUserSuccess = (data: { apiKey: string }) =>
    action(constants.AUTH_USER_SUCCESS, data)
// handle error not implemented in ui
export const authUserFailure = () => action(constants.AUTH_USER_FAILURE)

// get user
export const getUserRequest = () => action(constants.GET_USER_REQUEST)
export const getUserSuccess = (data: User) =>
    action(constants.GET_USER_SUCCESS, data)
// handle error not implemented in ui
export const getUserFailure = () => action(constants.GET_USER_FAILURE)
