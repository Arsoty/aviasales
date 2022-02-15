export interface RatesState {
    rates: IRates
    loading: boolean
    error: null | string
}

export type IRates = {
    [key: string]: number
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
    payload: IRates
}

interface FetchRatesErrorAction {
    type: RatesActionTypes.FETCH_RATES_ERROR
    payload: string
}

export type RatesAction =
    | FetchRatesAction
    | FetchRatesSuccessAction
    | FetchRatesErrorAction
