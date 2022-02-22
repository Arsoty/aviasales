import React, { useEffect, useMemo } from 'react'
import { observer } from 'mobx-react-lite'
import TicketsHandler from './TicketsHandler'
import Alert from './Alert'
import BuyForm from './BuyForm'
import SuccessForm from './SuccessForm'
import TicketStore from '../store/ticket'
import RatesStore from '../store/rates'
import StopsStore from '../store/stops'
import { ITicket } from '../types/ticket'
import '../styles/TicketListStyles.scss'

const TicketList = observer((): JSX.Element => {
    const { stops } = StopsStore
    const { rate, rates } = RatesStore
    const { tickets, error, loading } = TicketStore

    useEffect(() => {
        TicketStore.getTickets()
        RatesStore.getRates()
    }, [])

    const memoizedTickets = useMemo(
        () => tickets.filter((ticket: ITicket) => stops.includes(ticket.stops)),
        [tickets, stops]
    )

    if (loading) {
        return <div className="loading">Загрузка билетов!</div>
    }
    if (error) {
        return <div className="loading">{error}</div>
    }

    return memoizedTickets.length ? (
        <>
            <TicketsHandler
                rate={rates[rate]}
                rateName={rate}
                tickets={memoizedTickets}
            />
            <BuyForm />
            <SuccessForm />
        </>
    ) : (
        <Alert />
    )
})

export default TicketList
