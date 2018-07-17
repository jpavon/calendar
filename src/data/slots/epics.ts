import { ActionsObservable, ofType, StateObservable } from 'redux-observable'
import { of } from 'rxjs'
import { mergeMap, map, catchError, filter } from 'rxjs/operators'

import { slots } from 'api'
import constants from 'data/slots/constants'
import * as actions from 'data/slots/actions'
import { RootState } from '../types'

const getSlotsEpic = (
    action$: ActionsObservable<ReturnType<typeof actions.getSlotsRequest>>
) =>
    action$.pipe(
        ofType(constants.GET_SLOTS_REQUEST),
        mergeMap((action) =>
            slots.get(action.payload.datetime).pipe(
                map((ajaxResponse) =>
                    actions.getSlotsSuccess(
                        ajaxResponse.response,
                        action.payload.datetime
                    )
                ),
                // handle error not implemented in ui
                catchError(() => of(actions.getSlotsFailure()))
            )
        )
    )

const changeWeekEpic = (
    action$: ActionsObservable<ReturnType<typeof actions.changeWeek>>,
    state$: StateObservable<RootState>
) =>
    action$.pipe(
        ofType(constants.CHANGE_WEEK),
        filter(
            (action) =>
                state$.value.slots.entities![action.payload.datetime] ===
                undefined
        ),
        map((action) => actions.getSlotsRequest(action.payload.datetime))
    )

const postSlotsEpic = (
    action$: ActionsObservable<ReturnType<typeof actions.postBookSlotRequest>>
) =>
    action$.pipe(
        ofType(constants.POST_BOOK_SLOT_REQUEST),
        mergeMap((action) =>
            slots.postBook(action.payload.slot).pipe(
                map((ajaxResponse) =>
                    actions.postBookSlotSuccess(action.payload.slot.Start)
                ),
                // handle error not implemented in ui
                catchError(() => of(actions.postBookSlotFailure()))
            )
        )
    )

export default [getSlotsEpic, changeWeekEpic, postSlotsEpic]
