import * as React from 'react'
import { render, cleanup, fireEvent } from 'react-testing-library'
import 'jest-dom/extend-expect'

import Calendar from './Calendar'

afterEach(cleanup)

it('<Calendar />', () => {
    const slotsMock = {
        dailySlots: {
            Mon: [
                {
                    Start: '2018-07-16T09:00:00',
                    End: '2018-07-16T09:10:00',
                    formatted: {
                        start: '09:00',
                        end: '09:10',
                        taken: false
                    }
                },
                {
                    Start: '2018-07-16T11:00:00',
                    End: '2018-07-16T11:10:00',
                    Taken: true,
                    formatted: {
                        start: '11:00',
                        end: '11:10',
                        taken: true
                    }
                }
            ],
            Tue: [
                {
                    Start: '2018-07-16T12:00:00',
                    End: '2018-07-16T12:10:00',
                    formatted: {
                        start: '12:00',
                        end: '12:10',
                        taken: false
                    }
                }
            ]
        },
        meta: {
            week: '07/16/2018'
        }
    }

    const nextWeekFnMock = jest.fn()
    const prevWeekFnMock = jest.fn()
    const bookSlotFnMock = jest.fn()

    const { getByText } = render(
        <Calendar
            userName={'Username here'}
            slots={slotsMock}
            nextWeek={nextWeekFnMock}
            prevWeek={prevWeekFnMock}
            bookSlot={bookSlotFnMock}
        />
    )

    expect(getByText('Username here', { exact: false })).toBeInTheDOM()

    fireEvent.click(getByText('Next Week'))
    expect(nextWeekFnMock).toHaveBeenCalledTimes(1)

    fireEvent.click(getByText('Prev Week'))
    expect(prevWeekFnMock).toHaveBeenCalledTimes(1)

    fireEvent.click(getByText('09:00')) // not taken time
    expect(bookSlotFnMock).toHaveBeenCalledTimes(1)

    fireEvent.click(getByText('11:00')) // taken time
    expect(bookSlotFnMock).toHaveBeenCalledTimes(1)
})
