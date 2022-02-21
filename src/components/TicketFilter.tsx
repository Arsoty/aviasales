import React from 'react'
import '../styles/TicketFilterStyles.scss'
import { observer } from 'mobx-react-lite'
import StopsStore from '../store/stops'

export const TicketFilter = observer((): JSX.Element => {
    const { stops } = StopsStore
    return (
        <div className="main">
            <div className="mainContent">
                <input
                    type="checkbox"
                    className="btn btn-danger"
                    value={-1}
                    onChange={(e) => StopsStore.getStops(+e.target.value)}
                    checked={stops.length === 5}
                />
                Все варианты
                <input
                    type="checkbox"
                    className="btn btn-info"
                    value={0}
                    onChange={(e) => StopsStore.getStops(+e.target.value)}
                    checked={stops.includes(0)}
                />
                Без пересадок
                <input
                    type="checkbox"
                    className="btn btn-info"
                    value={1}
                    onChange={(e) => StopsStore.getStops(+e.target.value)}
                    checked={stops.includes(1)}
                />
                1 пересадка
                <input
                    type="checkbox"
                    className="btn btn-info"
                    value={2}
                    onChange={(e) => StopsStore.getStops(+e.target.value)}
                    checked={stops.includes(2)}
                />
                2 пересадки
                <input
                    type="checkbox"
                    className="btn btn-info"
                    value={3}
                    onChange={(e) => StopsStore.getStops(+e.target.value)}
                    checked={stops.includes(3)}
                />
                3 пересадки
            </div>
        </div>
    )
})
