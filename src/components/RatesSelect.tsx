import React, { useState } from 'react'
import '../styles/RatesSelectStyles.scss'
import { observer } from 'mobx-react-lite'
import ratesChange from '../store/ratesChange'

const RatesSelect = observer((): JSX.Element => {
    const [activeUAH, setActiveUAH] = useState(' active')
    const [activeRUB, setActiveRUB] = useState('')
    const [activeUSD, setActiveUSD] = useState('')

    return (
        <div className="rates">
            <div className="buttons">
                <div className="buttonsRates">
                    <button
                        onClick={() => {
                            ratesChange.getRate('UAH')
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
                            ratesChange.getRate('RUB')
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
                            ratesChange.getRate('USD')
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
})

export default RatesSelect
