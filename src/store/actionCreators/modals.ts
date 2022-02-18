import { Dispatch } from 'react'
import { TModalsAction, ModalsActionTypes } from '../../types/modals'

export const getModals =
    (state: boolean[]) => async (dispatch: Dispatch<TModalsAction>) => {
        dispatch({
            type: ModalsActionTypes.MODALS_STATE_CHANGE,
            payload: state,
        })
    }
