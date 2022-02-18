export interface IModalsState {
    modals: boolean[]
}

export enum ModalsActionTypes {
    MODALS_STATE_CHANGE,
}

interface ModalsStateChangeAction {
    type: ModalsActionTypes.MODALS_STATE_CHANGE
    payload: boolean[]
}

export type TModalsAction = ModalsStateChangeAction
