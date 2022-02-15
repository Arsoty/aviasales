import React, { useState } from 'react'
import TicketList from './TicketList'

interface IRate {
    rate: string
    setStops: (stops: number) => void
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function TicketFilter({ rate, setStops }: IRate) {
    return (
        <div className="buttonsStops">
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
    )
}
