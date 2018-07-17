import * as actions from 'data/slots/actions'

export interface Slot {
    Start: string
    End: string
    Taken?: boolean
}

export interface SlotBookPost {
    Start: string
    End: string
    Comments: string
    Patient: {
        Name: string
        SecondName: string
        Email: string
        Phone: string
    }
}

export type Action = ReturnType<typeof actions[keyof typeof actions]>
