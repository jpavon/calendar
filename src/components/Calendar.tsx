import * as React from 'react'
import styled from 'styled-components'

import { theme } from 'styles'
import { getSlotsSelector } from 'data/slots/selectors'
import { Slot } from 'data/slots/types'
import { getWeekDaysKeys } from 'utils/date'
import Button from 'components/Button'
import Link from 'components/Link'

interface Props {
    userName: string
    slots: ReturnType<typeof getSlotsSelector>
    nextWeek: () => void
    prevWeek: () => void
    bookSlot: (slot: Slot) => void
}

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 1rem;
`

const Title = styled.h1`
    text-align: center;
`

const UserName = styled.div`
    text-align: right;
`

const Week = styled.div`
    display: flex;
`

const Day = styled.div`
    flex: 0 0 ${(1 / 7) * 100}%;
    max-width: ${(1 / 7) * 100}%;

    text-align: center;
`

const DayTitle = styled.div`
    margin-bottom: 1rem;
    padding: 1rem 0;

    background-color: ${theme.color.secondary};
    color: #fff;
`

const Time = styled.div`
    margin-bottom: 1rem;
`

const DisabledTime = styled.div`
    cursor: default;
    color: red;
    opacity: 0.6;
`

const NextPrev = styled.div`
    display: flex;
    margin-bottom: 0.5rem;
    justify-content: space-between;
`

const Calendar: React.SFC<Props> = (props) => (
    <Container>
        <UserName>Hello {props.userName}!</UserName>
        <Title>Week of {props.slots.meta.week}</Title>
        <NextPrev>
            <Button onClick={props.prevWeek}>Prev Week</Button>
            <Button onClick={props.nextWeek}>Next Week</Button>
        </NextPrev>
        <Week>
            {getWeekDaysKeys().map((day) => (
                <Day key={day}>
                    <DayTitle>{day}</DayTitle>
                    {props.slots.dailySlots &&
                        props.slots.dailySlots[day] &&
                        props.slots.dailySlots[day].length > 0 &&
                        props.slots.dailySlots[day].map((slot) => (
                            <Time key={slot.Start}>
                                {slot.formatted.taken ? (
                                    <DisabledTime>
                                        {slot.formatted.start}
                                    </DisabledTime>
                                ) : (
                                    <Link onClick={() => props.bookSlot(slot)}>
                                        {slot.formatted.start}
                                    </Link>
                                )}
                            </Time>
                        ))}
                </Day>
            ))}
        </Week>
    </Container>
)

export default Calendar
