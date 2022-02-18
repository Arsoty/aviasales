import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import '../styles/RatesSelectStyles.scss'
import { getRates } from '../store/actionCreators/rates'

function RatesSelect(): JSX.Element {
    const dispatch = useDispatch()
    const [activeUAH, setActiveUAH] = useState(' active')
    const [activeRUB, setActiveRUB] = useState('')
    const [activeUSD, setActiveUSD] = useState('')

    return (
        <div className="rates">
            <div className="buttons">
                <div className="buttonsRates">
                    <button
                        onClick={() => {
                            dispatch(getRates('UAH'))
                            setActiveUAH('active')
                            setActiveRUB('')
                            setActiveUSD('')
                        }}
                        type="submit"
                        className={`btn ${activeUAH}`.trim()}
                    >
                        UAH
                    </button>
                    <button
                        onClick={() => {
                            dispatch(getRates('RUB'))
                            setActiveRUB('active')
                            setActiveUAH('')
                            setActiveUSD('')
                        }}
                        type="submit"
                        className={`btn ${activeRUB}`.trim()}
                    >
                        RUB
                    </button>
                    <button
                        onClick={() => {
                            dispatch(getRates('USD'))
                            setActiveUSD('active')
                            setActiveRUB('')
                            setActiveUAH('')
                        }}
                        type="submit"
                        className={`btn ${activeUSD}`.trim()}
                    >
                        USD
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RatesSelect
