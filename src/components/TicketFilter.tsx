import React from 'react'

interface IStops {
    setStops: (stops: number) => void
}

export function TicketFilter({ setStops }: IStops): JSX.Element {
    return (
        <div className="buttonsStops">
            {/* <input
                type="checkbox"
                className="btn btn-danger"
                checked={() => {
                    setStops(stopsCount)
                }}
            />
            <input
                type="checkbox"
                className="btn btn-info"
                onClick={() => setStops(stopsCount)}
            />
            <input
                type="checkbox"
                className="btn btn-info"
                onClick={() => setStops(stopsCount)}
            />
            <input
                type="checkbox"
                className="btn btn-info"
                onClick={() => setStops(stopsCount)}
            />
            <input
                type="checkbox"
                className="btn btn-info"
                onClick={() => setStops(stopsCount)}
            /> */}
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
