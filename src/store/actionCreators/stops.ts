import { Dispatch } from 'react'
import { StopsActionTypes, TStopsAction } from '../../types/stops'

export const getStops =
    (stops: number) => async (dispatch: Dispatch<TStopsAction>) => {
        dispatch({
            type: StopsActionTypes.STOPS_CHANGE,
            payload: stops,
        })
    }
