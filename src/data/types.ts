import { User } from 'data/user/types'
import { Slot } from 'data/slots/types'

export interface RootState {
    user: {
        entity: User | null
        apiKey: string | null
    }
    slots: {
        entities: Record<string, Slot[]> | null
        selectedWeek: string
    }
    ui: {
        isLoading: boolean
    }
}
