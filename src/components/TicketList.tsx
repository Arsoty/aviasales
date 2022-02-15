import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../hooks/useTypeSelector'
import { fetchTickets } from '../store/actionCreators/tickets'
import TicketsHandler from './TicketsHandler'
import { fetchRates } from '../store/actionCreators/rates'
import { IRates } from '../types/rates'

interface Prop {
    stops: number
    rate: string
}

function TicketList({ stops = -1, rate = 'UAH' }: Prop): JSX.Element {
    const { tickets, error, loading } = useTypedSelector(
        (state) => state.ticket
    )

    const { rates } = useTypedSelector((state) => state.rate)

    const myRate = rates as IRates

    const rateToConvert = myRate[rate]

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTickets())
        dispatch(fetchRates())
        tickets.sort((a, b) => a.price - b.price)
    }, [])

    if (stops === -1) {
        tickets.sort((a, b) => a.price - b.price)
    } else {
        const filteredTickets = tickets.filter(
            (ticket) => ticket.stops === stops
        )
        return (
            <TicketsHandler
                rate={rateToConvert}
                rateName={rate}
                tickets={filteredTickets}
            />
        )
    }

    if (loading) {
        return <div>Загрузка билетов!</div>
    }
    if (error) {
        return <div>{error}</div>
    }
    return (
        <TicketsHandler
            rate={rateToConvert}
            rateName={rate}
            tickets={tickets}
        />
    )
}

export default TicketList
