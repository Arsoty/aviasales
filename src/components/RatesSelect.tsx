import React, { useState } from 'react'
import { TicketFilter } from './TicketFilter'
import TicketList from './TicketList'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function RatesSelect() {
    const [stops, setStops] = useState(-1)
    const [rate, setRate] = useState('UAH')
    return (
        <div className="center">
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
                <div>
                    <TicketFilter setStops={setStops} />
                </div>
            </div>
            <div className="tickets">
                <TicketList rate={rate} stops={stops} />
            </div>
        </div>
    )
}

export default RatesSelect
