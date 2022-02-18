import { Dispatch } from 'react'
import { TModalsAction, ModalsActionTypes } from '../../types/modals'

export const getModals =
    (state: boolean) => async (dispatch: Dispatch<TModalsAction>) => {
        dispatch({
            type: ModalsActionTypes.BUY_FORM_STATE_CHANGE,
            payload: state,
        })
        dispatch({
            type: ModalsActionTypes.SUCCESS_FORM_STATE_CHANGE,
            payload: state,
        })
    }
