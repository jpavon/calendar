import { ActionsObservable, ofType } from 'redux-observable'
import { of } from 'rxjs'
import { mergeMap, map, take, combineLatest, race } from 'rxjs/operators'

import { getCurrentWeek } from 'utils/date'
import constants from 'data/constants'
import userConstants from 'data/user/constants'
import slotsConstants from 'data/slots/constants'
import * as actions from 'data/actions'
import * as userActions from 'data/user/actions'
import * as slotsActions from 'data/slots/actions'
import { hideLoading } from './ui/actions'

const loadDataEpic = (
    action$: ActionsObservable<{ type: constants.LOAD_DATA }>
) =>
    action$.pipe(
        ofType(actions.loadData().type),
        mergeMap(() =>
            of(
                slotsActions.getSlotsRequest(getCurrentWeek()),
                userActions.getUserRequest()
            )
        )
    )

const loadedDataEpic = (
    action$: ActionsObservable<
        | ReturnType<typeof userActions.getUserSuccess>
        | ReturnType<typeof userActions.getUserFailure>
        | ReturnType<typeof slotsActions.getSlotsSuccess>
        | ReturnType<typeof slotsActions.getSlotsFailure>
    >
) =>
    action$
        .pipe(
            combineLatest(
                action$.ofType(userConstants.GET_USER_SUCCESS),
                action$.ofType(slotsConstants.GET_SLOTS_SUCCESS)
            )
        )
        .pipe(
            race(
                // handle error not implemented in ui
                action$
                    .ofType(
                        userConstants.GET_USER_FAILURE,
                        slotsConstants.GET_SLOTS_FAILURE
                    )
                    .pipe(map(() => hideLoading()))
            ),
            map(() => hideLoading()),
            take(1)
        )

export default [loadDataEpic, loadedDataEpic]
