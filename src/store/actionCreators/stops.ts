import { Dispatch } from 'react'
import { StopsActionTypes, StopsAction } from '../../types/stops'

export const getStops =
    (stops: Array<number>) => async (dispatch: Dispatch<StopsAction>) => {
        dispatch({
            type: StopsActionTypes.STOPS_CHANGE,
            payload: stops,
        })
    }
