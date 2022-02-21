import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import TicketsHandler from './TicketsHandler'
import Alert from './Alert'
import BuyForm from './BuyForm'
import SuccessForm from './SuccessForm'
import ticket from '../store/ticket'
import rates from '../store/rates'
import stops from '../store/stops'
import ratesChange from '../store/ratesChange'

const TicketList = observer((): JSX.Element => {
    useEffect(() => {
        ticket.getTickets(stops.stops)
        rates.getRates()
    }, [stops.stops])

    if (ticket.loading) {
        return <div>Загрузка билетов!</div>
    }
    if (ticket.error) {
        return <div>{ticket.error}</div>
    }

    return ticket.tickets.length ? (
        <>
            <TicketsHandler
                rate={rates.rates[ratesChange.rate]}
                rateName={ratesChange.rate}
                tickets={ticket.tickets}
            />
            <BuyForm />
            <SuccessForm />
        </>
    ) : (
        <Alert />
    )
})

export default TicketList
