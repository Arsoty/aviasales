import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../hooks/useTypeSelector'
import { fetchTickets } from '../store/actionCreators/tickets'
import TicketsHandler from './TicketsHandler'
import { fetchRates } from '../store/actionCreators/rates'

interface Prop {
    stops: number
    rate: string
}

type TStops = {
    '-1': boolean
    '0': boolean
    '1': boolean
    '2': boolean
    '3': boolean
}

// stops = {
//     '-1': true,
//     '0': false,
//     '1': false,
//     '2': false,
//     '3': false,
// },

function TicketList({ stops = -1, rate = 'UAH' }: Prop): JSX.Element {
    const { tickets, error, loading } = useTypedSelector(
        (state) => state.ticket
    )

    const { rates } = useTypedSelector((state) => state.rate)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTickets({ stops }))
        dispatch(fetchRates())
    }, [stops, dispatch])

    if (loading) {
        return <div>Загрузка билетов!</div>
    }
    if (error) {
        return <div>{error}</div>
    }

    return (
        <TicketsHandler rate={rates[rate]} rateName={rate} tickets={tickets} />
    )
}

export default TicketList
