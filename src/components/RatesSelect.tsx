import React, { useState } from 'react'
import TicketList from './TicketList'
import '../styles/RatesSelectStyles.scss'

interface IStop {
    stopsList: Array<number>
}

function RatesSelect({ stopsList }: IStop): JSX.Element {
    const [rate, setRate] = useState('UAH')
    return (
        <div className="rates">
            <div className="buttons">
                <div className="buttonsRates">
                    <button
                        onClick={() => setRate('UAH')}
                        type="submit"
                        className="btn btn-success"
                    >
                        UAH
                    </button>
                    <button
                        onClick={() => setRate('RUB')}
                        type="submit"
                        className="btn btn-success"
                    >
                        RUB
                    </button>
                    <button
                        onClick={() => setRate('USD')}
                        type="submit"
                        className="btn btn-success"
                    >
                        USD
                    </button>
                </div>
            </div>
            {stopsList.length ? (
                <div className="tickets">
                    <TicketList rate={rate} stops={stopsList} />
                </div>
            ) : (
                <div className="tickets">
                    <div className="alert alert-danger card" role="alert">
                        Выберите хотя бы один из вариантов!
                    </div>
                </div>
            )}
        </div>
    )
}

export default RatesSelect
