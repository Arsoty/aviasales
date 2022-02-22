import React from 'react'
import '../styles/RatesSelectStyles.scss'
import { observer } from 'mobx-react-lite'
import RatesStore from '../store/rates'

const RatesSelect = observer((): JSX.Element => {
    const { rate } = RatesStore;

    return (
        <div className="rates">
            <div className="buttons">
                <div className="buttonsRates">
                    <button
                        onClick={() => {
                            RatesStore.getRate('UAH')
                        }}
                        type="submit"
                        className={`btn ${rate === 'UAH' && 'active'}`}
                    >
                        UAH
                    </button>
                    <button
                        onClick={() => {
                            RatesStore.getRate('RUB')
                        }}
                        type="submit"
                        className={`btn ${rate === 'RUB' && 'active'}`}
                    >
                        RUB
                    </button>
                    <button
                        onClick={() => {
                            RatesStore.getRate('USD')
                        }}
                        type="submit"
                        className={`btn ${rate === 'USD' && 'active'}`}
                    >
                        USD
                    </button>
                </div>
            </div>
        </div>
    )
})

export default RatesSelect
