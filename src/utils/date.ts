import {
    startOfWeek,
    format,
    parse,
    eachDay,
    endOfWeek,
    addWeeks,
    subWeeks
} from 'date-fns'

const now = startOfWeek(new Date(), { weekStartsOn: 1 })

export const getCurrentWeek = () => format(now, 'YYYYMMDD')

export const getFormattedTime = (date: string) =>
    format(new Date(date), 'HH:mm')

export const getDayKey = (date: string) => format(new Date(date), 'ddd')

export const getFormattedSelectedWeek = (selectedWeek: string) =>
    format(parse(selectedWeek), 'MM/DD/YYYY')

export const getWeekDaysKeys = () => {
    const arr = eachDay(
        startOfWeek(now, { weekStartsOn: 1 }),
        endOfWeek(now, { weekStartsOn: 1 })
    )
    return arr.map((date) => getDayKey(date.toDateString()))
}

export const getNextWeek = (selectedWeek: string) =>
    format(addWeeks(parse(selectedWeek), 1), 'YYYYMMDD')

export const getPrevWeek = (selectedWeek: string) =>
    format(subWeeks(parse(selectedWeek), 1), 'YYYYMMDD')
