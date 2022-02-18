import {
    TModalsAction,
    ModalsActionTypes,
    IModalsState,
} from '../../types/modals'

const initialState: IModalsState = {
    buyFormActive: false,
    successFormActive: false,
}

export const modalsReducer = (
    // eslint-disable-next-line default-param-last
    state = initialState,
    action: TModalsAction
): IModalsState => {
    switch (action.type) {
        case ModalsActionTypes.BUY_FORM_STATE_CHANGE:
            return {
                buyFormActive: !state.successFormActive
                    ? false
                    : !action.payload,
                successFormActive: state.buyFormActive ? true : !action.payload,
            }
        case ModalsActionTypes.SUCCESS_FORM_STATE_CHANGE:
            return {
                successFormActive: state.successFormActive
                    ? !action.payload
                    : false,
                buyFormActive: state.successFormActive ? !action.payload : true,
            }
        default:
            return state
    }
}
