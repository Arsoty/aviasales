import React, { useState } from 'react'
import { TicketFilter } from './TicketFilter'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function RatesSelect() {
    const [rate, setRate] = useState('UAH')
    return (
        <>
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
            <TicketFilter rate={rate} />
        </>
    )
}

export default RatesSelect
