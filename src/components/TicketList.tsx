/* eslint-disable react/function-component-definition */
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
// import { useSelector } from 'react-redux'
import { useTypedSelector } from '../hooks/useTypeSelector'
import { fetchTickets } from '../store/actionCreators/tickets'
import TicketsHandler from './TicketsHandler'

interface Prop {
    stops: number
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const TicketList = ({ stops = -1 }: Prop) => {
    const { tickets, error, loading } = useTypedSelector(
        (state) => state.ticket
    )

    tickets.sort((a, b) => a.price - b.price)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTickets())
    }, [])

    if (stops === -1) {
        tickets.sort((a, b) => a.price - b.price)
    } else {
        const filteredTickets = tickets.filter(
            (ticket) => ticket.stops === stops
        )
        return <TicketsHandler tickets={filteredTickets} />
    }

    if (loading) {
        return <div>Загрузка билетов!</div>
    }
    if (error) {
        return <div>{error}</div>
    }
    return <TicketsHandler tickets={tickets} />
}

export default TicketList
