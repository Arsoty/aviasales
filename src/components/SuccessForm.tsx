/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import '../styles/SuccessFormStyles.scss'
import { observer } from 'mobx-react-lite'
import modals from '../store/modals'

const SuccessForm = observer(
    (): JSX.Element => (
        <div
            className={modals.modals[1] ? 'modal active' : 'modal'}
            onClick={() => modals.changeModals([false, false])}
        >
            <div className="modalContent" onClick={(e) => e.stopPropagation()}>
                <div className="alert alert-success" role="alert">
                    <h4 className="alert-heading">Успех!</h4>
                    <p>Спасибо за покупку!</p>
                    <hr />
                    <p className="mb-0">
                        Ваши персональные данные в безопасности!
                    </p>
                </div>
            </div>
        </div>
    )
)

export default SuccessForm
