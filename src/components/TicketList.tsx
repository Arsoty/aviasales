/* eslint-disable react/function-component-definition */
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

type RateType = {
    [key: string]: number
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const TicketList = ({ stops = -1, rate = 'UAH' }: Prop) => {
    const { tickets, error, loading } = useTypedSelector(
        (state) => state.ticket
    )

    const { rates } = useTypedSelector((state) => state.rate)

    const myRate = rates as RateType

    const rateToConvert = myRate[rate]

    tickets.sort((a, b) => a.price - b.price)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTickets())
        dispatch(fetchRates())
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
