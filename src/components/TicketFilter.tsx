import React from 'react'

type TStops = {
    '-1': boolean
    '0': boolean
    '1': boolean
    '2': boolean
    '3': boolean
}

interface IStops {
    setStops: (stops: number) => void
}

export function TicketFilter({ setStops }: IStops): JSX.Element {
    return (
        <div className="buttonsStops">
            {/* <input
                type="checkbox"
                className="btn btn-danger"
                value={-1}
                onChange={(e) => {
                    // setStops(stopsCount)
                    console.log(e.target.value)
                }}
            />
            <input
                type="checkbox"
                className="btn btn-info"
                value={0}
                onChange={(e) => {
                    // setStops(stopsCount)
                    console.log(e.target.value)
                }}
            />
            <input
                type="checkbox"
                className="btn btn-info"
                value={1}
                onChange={(e) => {
                    // setStops(stopsCount)
                    console.log(e.target.value)
                }}
            />
            <input
                type="checkbox"
                className="btn btn-info"
                value={2}
                onChange={(e) => {
                    // setStops(stopsCount)
                    console.log(e.target.value)
                }}
            />
            <input
                type="checkbox"
                className="btn btn-info"
                value={3}
                onChange={(e) => {
                    // setStops(stopsCount)
                    console.log(e.target.value)
                }}
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
