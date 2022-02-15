export interface RatesState {
    rates: IRates
    loading: boolean
    error: null | string
}

type IRates = {
    [key: string]: number
}

// type IRates = IRate

// interface IRate {
//     origin: string
//     origin_name: string
//     destination: string
//     destination_name: string
//     departure_date: string
//     departure_time: string
//     arrival_date: string
//     arrival_time: string
//     carrier: string
//     stops: number
//     price: number
// }

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
