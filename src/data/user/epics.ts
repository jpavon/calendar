import { ActionsObservable, ofType } from 'redux-observable'
import { of } from 'rxjs'
import { mergeMap, map, tap, catchError } from 'rxjs/operators'

import { user, STORE_API_KEY } from 'api'
import constants from 'data/user/constants'
import * as actions from 'data/user/actions'
import * as dataActions from 'data/actions'

const authUserEpic = (
    action$: ActionsObservable<ReturnType<typeof actions.authUserRequest>>
) =>
    action$.pipe(
        ofType(constants.AUTH_USER_REQUEST),
        mergeMap((action) =>
            user.auth(action.payload).pipe(
                mergeMap((fakeResponse) =>
                    of(
                        actions.authUserSuccess(fakeResponse),
                        dataActions.loadData()
                    ).pipe(
                        tap(() => {
                            // save email locally to keep fake login info
                            localStorage.setItem('email', action.payload.email)
                            localStorage.setItem(
                                STORE_API_KEY,
                                fakeResponse.apiKey
                            )
                        })
                    )
                )
            )
        )
    )

const getUserEpic = (
    action$: ActionsObservable<ReturnType<typeof actions.getUserRequest>>
) =>
    action$.pipe(
        ofType(constants.GET_USER_REQUEST),
        mergeMap(() =>
            user.get().pipe(
                map((fakeResponse) => actions.getUserSuccess(fakeResponse)),
                // handle error not implemented in ui
                catchError(() => of(actions.getUserFailure()))
            )
        )
    )

export default [authUserEpic, getUserEpic]
