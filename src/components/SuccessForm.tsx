/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import '../styles/SuccessFormStyles.scss'
import { useDispatch } from 'react-redux'
import { getModals } from '../store/actionCreators/modals'

interface ISuccess {
    success: boolean
}

function SuccessForm({ success }: ISuccess): JSX.Element {
    const dispatch = useDispatch()
    return (
        <div
            className={success ? 'modal active' : 'modal'}
            onClick={() => dispatch(getModals(true))}
        >
            <div className="modalContent" onClick={(e) => e.stopPropagation()}>
                <div className="alert alert-success" role="alert">
                    <h4 className="alert-heading">Успех!</h4>
                    <p>Спасибо за покупку!</p>
                    <hr />
                    <p className="mb-0">
                        Ваши персональные данные в безопсности!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SuccessForm
