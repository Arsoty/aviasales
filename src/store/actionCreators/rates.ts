import { Dispatch } from 'redux'
import { RatesAction, RatesActionTypes } from '../../types/rates'

interface IRates {
    [key: string]: number
}

const url = 'https://open.er-api.com/v6/latest/UAH'

export const getRates =
    (rate: string) => async (dispatch: Dispatch<RatesAction>) => {
        dispatch({
            type: RatesActionTypes.RATES_CHANGE,
            payload: rate,
        })
    }

export const fetchRates =
    ({ rates }: IRates) =>
    async (dispatch: Dispatch<RatesAction>) => {
        try {
            dispatch({ type: RatesActionTypes.FETCH_RATES })
            const response = await fetch(url).then((data) => data.json())
            dispatch({
                type: RatesActionTypes.FETCH_RATES_SUCCESS,
                payload: response.rates,
                rates,
            })
        } catch (e) {
            dispatch({
                type: RatesActionTypes.FETCH_RATES_ERROR,
                payload: 'Произошла ошибка!',
            })
        }
    }
