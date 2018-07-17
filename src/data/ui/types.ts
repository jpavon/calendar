import * as actions from 'data/ui/actions'

export type Action = ReturnType<typeof actions[keyof typeof actions]>
