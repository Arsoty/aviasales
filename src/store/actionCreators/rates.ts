import { Dispatch } from 'redux'
import { TRatesAction, RatesActionTypes } from '../../types/rates'

const url = 'https://open.er-api.com/v6/latest/UAH'

export const getRates =
    (rate: string) => async (dispatch: Dispatch<TRatesAction>) => {
        dispatch({
            type: RatesActionTypes.RATES_CHANGE,
            payload: rate,
        })
    }

export const fetchRates = () => async (dispatch: Dispatch<TRatesAction>) => {
    try {
        dispatch({ type: RatesActionTypes.FETCH_RATES })
        const response = await fetch(url).then((data) => data.json())
        dispatch({
            type: RatesActionTypes.FETCH_RATES_SUCCESS,
            payload: response.rates,
        })
    } catch (e) {
        dispatch({
            type: RatesActionTypes.FETCH_RATES_ERROR,
            payload: 'Произошла ошибка!',
        })
    }
}
