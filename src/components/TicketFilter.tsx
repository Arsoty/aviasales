import React, { useEffect, useState } from 'react'
import '../styles/TicketFilterStyles.scss'
import { useDispatch } from 'react-redux'
import { getStops } from '../store/actionCreators/stops'

export function TicketFilter(): JSX.Element {
    const [all, setAll] = useState(true)
    const [zero, setZero] = useState(false)
    const [one, setOne] = useState(false)
    const [two, setTwo] = useState(false)
    const [three, setThree] = useState(false)

    function filterStops(
        allS: boolean,
        oneS: boolean,
        twoS: boolean,
        threeS: boolean,
        zeroS: boolean
    ): Array<number> {
        const arr = []
        if (allS) {
            arr.push(-1)
        }
        if (oneS) {
            arr.push(1)
        }
        if (twoS) {
            arr.push(2)
        }
        if (threeS) {
            arr.push(3)
        }
        if (zeroS) {
            arr.push(0)
        }
        return arr
    }
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getStops(filterStops(all, one, two, three, zero)))
    }, [dispatch, all, one, two, three, zero])

    dispatch(getStops(filterStops(all, one, two, three, zero)))

    return (
        <div className="main">
            <div className="mainContent">
                <input
                    type="checkbox"
                    className="btn btn-danger"
                    value={-1}
                    onChange={() => {
                        setAll(!all)
                    }}
                    checked={!!all}
                />
                Все варианты
                <input
                    type="checkbox"
                    className="btn btn-info"
                    value={0}
                    onChange={() => {
                        setZero(!zero)
                    }}
                    checked={!!zero || !!all}
                />
                Без пересадок
                <input
                    type="checkbox"
                    className="btn btn-info"
                    value={1}
                    onChange={() => setOne(!one)}
                    checked={!!one || !!all}
                />
                1 пересадка
                <input
                    type="checkbox"
                    className="btn btn-info"
                    value={2}
                    onChange={() => {
                        setTwo(!two)
                    }}
                    checked={!!two || !!all}
                />
                2 пересадки
                <input
                    type="checkbox"
                    className="btn btn-info"
                    value={3}
                    onChange={() => {
                        setThree(!three)
                    }}
                    checked={!!three || !!all}
                />
                3 пересадки
            </div>
        </div>
    )
}
