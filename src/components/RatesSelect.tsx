import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import TicketList from './TicketList'
import '../styles/RatesSelectStyles.scss'
import { getRates } from '../store/actionCreators/rates'

function RatesSelect(): JSX.Element {
    const [rate, setRate] = useState('UAH')

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getRates(rate))
    }, [dispatch, rate])

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
        </div>
    )
}

export default RatesSelect
