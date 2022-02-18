import React from 'react'
import '../styles/TicketFilterStyles.scss'
import { useDispatch } from 'react-redux'
import { getStops } from '../store/actionCreators/stops'
import { useTypedSelector } from '../hooks/useTypeSelector'

export function TicketFilter(): JSX.Element {
    const { stops } = useTypedSelector((state) => state.stops)

    const dispatch = useDispatch()

    return (
        <div className="main">
            <div className="mainContent">
                <input
                    type="checkbox"
                    className="btn btn-danger"
                    value={-1}
                    onChange={(e) => dispatch(getStops(+e.target.value))}
                    checked={stops.includes(-1)}
                />
                Все варианты
                <input
                    type="checkbox"
                    className="btn btn-info"
                    value={0}
                    onChange={(e) => dispatch(getStops(+e.target.value))}
                    checked={stops.includes(0) || stops.includes(-1)}
                />
                Без пересадок
                <input
                    type="checkbox"
                    className="btn btn-info"
                    value={1}
                    onChange={(e) => dispatch(getStops(+e.target.value))}
                    checked={stops.includes(1) || stops.includes(-1)}
                />
                1 пересадка
                <input
                    type="checkbox"
                    className="btn btn-info"
                    value={2}
                    onChange={(e) => dispatch(getStops(+e.target.value))}
                    checked={stops.includes(2) || stops.includes(-1)}
                />
                2 пересадки
                <input
                    type="checkbox"
                    className="btn btn-info"
                    value={3}
                    onChange={(e) => dispatch(getStops(+e.target.value))}
                    checked={stops.includes(3) || stops.includes(-1)}
                />
                3 пересадки
            </div>
        </div>
    )
}
