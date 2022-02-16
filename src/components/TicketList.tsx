import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../hooks/useTypeSelector'
import { fetchTickets } from '../store/actionCreators/tickets'
import TicketsHandler from './TicketsHandler'
import { fetchRates } from '../store/actionCreators/rates'

interface Prop {
    stops: Array<number>
    rate: string
}

function TicketList({ stops = [], rate = 'UAH' }: Prop): JSX.Element {
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
