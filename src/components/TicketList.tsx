import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../hooks/useTypeSelector'
import { fetchTickets } from '../store/actionCreators/tickets'
import TicketsHandler from './TicketsHandler'
import { fetchRates } from '../store/actionCreators/rates'
import Alert from './Alert'

function TicketList(): JSX.Element {
    const { tickets, error, loading } = useTypedSelector(
        (state) => state.ticket
    )

    const { rates } = useTypedSelector((state) => state.rate)

    const stops = useTypedSelector((state) => state.stops)

    const rate = useTypedSelector((state) => state.ratechange)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTickets(stops))
        dispatch(fetchRates())
    }, [dispatch, stops])

    if (loading) {
        return <div>Загрузка билетов!</div>
    }
    if (error) {
        return <div>{error}</div>
    }

    return tickets.length ? (
        <TicketsHandler
            rate={rates[rate.rate]}
            rateName={rate.rate}
            tickets={tickets}
        />
    ) : (
        <Alert />
    )
}

export default TicketList
