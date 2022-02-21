import React from 'react'
import '../styles/TicketFilterStyles.scss'
import { observer } from 'mobx-react-lite'
import stops from '../store/stops'

export const TicketFilter = observer(
    (): JSX.Element => (
        <div className="main">
            <div className="mainContent">
                <input
                    type="checkbox"
                    className="btn btn-danger"
                    value={-1}
                    onChange={(e) => stops.getStops(+e.target.value)}
                    checked={
                        stops.stops.includes(-1) ||
                        (stops.stops.includes(-1) &&
                            stops.stops.includes(0) &&
                            stops.stops.includes(1) &&
                            stops.stops.includes(2) &&
                            stops.stops.includes(3))
                    }
                />
                Все варианты
                <input
                    type="checkbox"
                    className="btn btn-info"
                    value={0}
                    onChange={(e) => stops.getStops(+e.target.value)}
                    checked={
                        stops.stops.includes(0) || stops.stops.includes(-1)
                    }
                />
                Без пересадок
                <input
                    type="checkbox"
                    className="btn btn-info"
                    value={1}
                    onChange={(e) => stops.getStops(+e.target.value)}
                    checked={
                        stops.stops.includes(1) || stops.stops.includes(-1)
                    }
                />
                1 пересадка
                <input
                    type="checkbox"
                    className="btn btn-info"
                    value={2}
                    onChange={(e) => stops.getStops(+e.target.value)}
                    checked={
                        stops.stops.includes(2) || stops.stops.includes(-1)
                    }
                />
                2 пересадки
                <input
                    type="checkbox"
                    className="btn btn-info"
                    value={3}
                    onChange={(e) => stops.getStops(+e.target.value)}
                    checked={
                        stops.stops.includes(3) || stops.stops.includes(-1)
                    }
                />
                3 пересадки
            </div>
        </div>
    )
)
