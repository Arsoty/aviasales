import {
    TModalsAction,
    ModalsActionTypes,
    IModalsState,
} from '../../types/modals'

const initialState: IModalsState = {
    modals: [],
}

export const modalsReducer = (
    // eslint-disable-next-line default-param-last
    state = initialState,
    action: TModalsAction
): IModalsState => {
    switch (action.type) {
        case ModalsActionTypes.MODALS_STATE_CHANGE:
            return {
                modals: action.payload,
            }
        default:
            return state
    }
}
