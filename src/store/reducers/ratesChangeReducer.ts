import {
    RatesChangeAction,
    RatesActionTypes,
    RatesChangeState,
} from '../../types/rates'

const initialState: RatesChangeState = {
    rate: 'UAH',
}

export const ratesChangeReducer = (
    // eslint-disable-next-line default-param-last
    state = initialState,
    action: RatesChangeAction
): RatesChangeState => {
    switch (action.type) {
        case RatesActionTypes.RATES_CHANGE:
            return { rate: action.payload }
        default:
            return state
    }
}
