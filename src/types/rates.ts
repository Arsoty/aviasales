export interface RatesState {
    rates: object
    loading: boolean
    error: null | string
}

export enum RatesActionTypes {
    FETCH_RATES = 'FETCH_RATES',
    FETCH_RATES_SUCCESS = 'FETCH_RATES_SUCCESS',
    FETCH_RATES_ERROR = 'FETCH_RATES_ERROR',
}

interface FetchRatesAction {
    type: RatesActionTypes.FETCH_RATES
}

interface FetchRatesSuccessAction {
    type: RatesActionTypes.FETCH_RATES_SUCCESS
    payload: object
}

interface FetchRatesErrorAction {
    type: RatesActionTypes.FETCH_RATES_ERROR
    payload: string
}

export type RatesAction =
    | FetchRatesAction
    | FetchRatesSuccessAction
    | FetchRatesErrorAction
