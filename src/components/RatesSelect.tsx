import React from 'react'
import { useDispatch } from 'react-redux'
import '../styles/RatesSelectStyles.scss'
import { getRates } from '../store/actionCreators/rates'

function RatesSelect(): JSX.Element {
    const dispatch = useDispatch()

    return (
        <div className="rates">
            <div className="buttons">
                <div className="buttonsRates">
                    <button
                        onClick={() => dispatch(getRates('UAH'))}
                        type="submit"
                        className="btn btn-success"
                    >
                        UAH
                    </button>
                    <button
                        onClick={() => dispatch(getRates('RUB'))}
                        type="submit"
                        className="btn btn-success"
                    >
                        RUB
                    </button>
                    <button
                        onClick={() => dispatch(getRates('USD'))}
                        type="submit"
                        className="btn btn-success"
                    >
                        USD
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RatesSelect
