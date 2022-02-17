import { RatesAction, RatesActionTypes, RatesState } from '../../types/rates'

const initialState: RatesState = {
    rates: {},
    loading: false,
    error: null,
}

export const ratesReducer = (
    // eslint-disable-next-line default-param-last
    state = initialState,
    action: RatesAction
): RatesState => {
    switch (action.type) {
        case RatesActionTypes.FETCH_RATES:
            return { loading: true, error: null, rates: {} }
        case RatesActionTypes.FETCH_RATES_SUCCESS:
            return {
                loading: false,
                error: null,
                rates: action.payload,
            }
        case RatesActionTypes.FETCH_RATES_ERROR:
            return { loading: false, error: action.payload, rates: {} }
        default:
            return state
    }
}
