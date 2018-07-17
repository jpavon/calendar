import * as React from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'

import { RootState } from 'data/types'
import { getSlotsSelector } from 'data/slots/selectors'
import CalendarComponent from 'components/Calendar'
import { changeWeek, postBookSlotRequest } from 'data/slots/actions'
import { getNextWeek, getPrevWeek } from 'utils/date'
import { Slot } from 'data/slots/types'

interface OwnProps {}

type Props = OwnProps &
    ReturnType<typeof mapStateToProps> &
    typeof mapDispatchToProps

class Calendar extends React.Component<Props> {
    private handleNextWeek = () => {
        this.props.changeWeek(getNextWeek(this.props.selectedWeek))
    }

    private handlePrevWeek = () => {
        this.props.changeWeek(getPrevWeek(this.props.selectedWeek))
    }

    private handleBookSlot = (slot: Slot) => {
        // this should be in a ui form
        this.props.postBookSlotRequest({
            Start: slot.Start,
            End: slot.End,
            Comments: 'my arm hurts a lot',
            Patient: {
                Name: 'Mario',
                SecondName: 'Neta',
                Email: 'mario@myspace.es',
                Phone: '555 44 33 22'
            }
        })
    }

    public render() {
        return (
            <>
                <Helmet>
                    <title>Calendar - Doctoralia</title>
                </Helmet>
                <CalendarComponent
                    userName={
                        this.props.user && this.props.user.email !== ''
                            ? this.props.user.email
                            : 'Anonimous'
                    }
                    slots={this.props.slots}
                    nextWeek={this.handleNextWeek}
                    prevWeek={this.handlePrevWeek}
                    bookSlot={this.handleBookSlot}
                />
            </>
        )
    }
}

const mapStateToProps = (state: RootState, props: OwnProps) => ({
    slots: getSlotsSelector(state),
    selectedWeek: state.slots.selectedWeek,
    user: state.user.entity
})

const mapDispatchToProps = {
    changeWeek,
    postBookSlotRequest
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Calendar)
