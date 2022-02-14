import React, { useState } from 'react'
import TicketList from './TicketList'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function TicketFilter() {
    const [stops, setStops] = useState(-1)

    return (
        <div>
            <div>
                <button
                    type="submit"
                    className="btn btn-danger"
                    onClick={() => setStops(-1)}
                >
                    Сбросить фильтр
                </button>
                <button
                    type="submit"
                    className="btn btn-info"
                    onClick={() => setStops(0)}
                >
                    Без пересадкок
                </button>
                <button
                    type="submit"
                    className="btn btn-info"
                    onClick={() => setStops(1)}
                >
                    1 пересадка
                </button>
                <button
                    type="submit"
                    className="btn btn-info"
                    onClick={() => setStops(2)}
                >
                    2 пересадки
                </button>
                <button
                    type="submit"
                    className="btn btn-info"
                    onClick={() => setStops(3)}
                >
                    3 пересадки
                </button>
            </div>
            <TicketList stops={stops} />
        </div>
    )
}
