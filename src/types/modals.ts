export interface IModalsState {
    buyFormActive: boolean
    successFormActive: boolean
}

export enum ModalsActionTypes {
    BUY_FORM_STATE_CHANGE = 'BUY_FORM_STATE_CHANGE',
    SUCCESS_FORM_STATE_CHANGE = 'SUCCESS_FORM_STATE_CHANGE',
}

interface BuyFormStateChangeAction {
    type: ModalsActionTypes.BUY_FORM_STATE_CHANGE
    payload: boolean
}

interface SuccessFormStateChangeAction {
    type: ModalsActionTypes.SUCCESS_FORM_STATE_CHANGE
    payload: boolean
}

export type TModalsAction =
    | BuyFormStateChangeAction
    | SuccessFormStateChangeAction
