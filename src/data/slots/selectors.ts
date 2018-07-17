import { createSelector } from 'reselect'

import { RootState } from 'data/types'
import { Slot } from 'data/slots/types'
import {
    getFormattedTime,
    getDayKey,
    getFormattedSelectedWeek
} from 'utils/date'

type FormattedSlots = Record<
    string,
    Array<
        Slot & {
            formatted: { start: string; end: string; taken: boolean }
        }
    >
>

interface SlotsMeta {
    week: string
}

export const getSlotsSelector = createSelector(
    (state: RootState) => state.slots.entities,
    (state: RootState) => state.slots.selectedWeek,
    (slots, selectedWeek) => {
        const meta: SlotsMeta = {
            week: getFormattedSelectedWeek(selectedWeek)
        }

        const formattedSlots =
            slots &&
            slots[selectedWeek] &&
            slots[selectedWeek].reduce<FormattedSlots>((acc, curr) => {
                const day = getDayKey(curr.Start)

                const formatted = {
                    start: getFormattedTime(curr.Start),
                    end: getFormattedTime(curr.End),
                    taken: !!curr.Taken
                }

                const formattedSlot = {
                    ...curr,
                    formatted
                }

                const slotsArray = acc[day]
                    ? [...acc[day], formattedSlot]
                    : [formattedSlot]

                return {
                    ...acc,
                    [day]: slotsArray
                }
            }, {})

        return {
            dailySlots: formattedSlots,
            meta
        }
    }
)
