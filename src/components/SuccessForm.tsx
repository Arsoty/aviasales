/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'

interface ISuccess {
    success: boolean
    setSuccess: (success: boolean) => void
}

function SuccessForm({ success, setSuccess }: ISuccess) {
    return (
        <div
            className={success ? 'modal active' : 'modal'}
            onClick={() => setSuccess(false)}
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
