import React, { useEffect, useMemo } from 'react'
import { observer } from 'mobx-react-lite'
import TicketsHandler from './TicketsHandler'
import Alert from './Alert'
import BuyForm from './BuyForm'
import SuccessForm from './SuccessForm'
import TicketStore from '../store/ticket'
import RatesStore from '../store/rates'
import StopsStore from '../store/stops'
import RatesChangeStore from '../store/ratesChange'
import { ITicket } from '../types/ticket'

const TicketList = observer((): JSX.Element => {
    const { stops } = StopsStore
    const { rate } = RatesChangeStore
    const { rates } = RatesStore
    const { tickets } = TicketStore

    useEffect(() => {
        TicketStore.getTickets()
        RatesStore.getRates()
    }, [])

    const memoizedRates = useMemo(() => rates, [rates])

    const memoizedTickets = useMemo(
        () => tickets.filter((ticket: ITicket) => stops.includes(ticket.stops)),
        [tickets, stops]
    )

    if (TicketStore.loading) {
        return <div>Загрузка билетов!</div>
    }
    if (TicketStore.error) {
        return <div>{TicketStore.error}</div>
    }

    return memoizedTickets.length ? (
        <>
            <TicketsHandler
                rate={memoizedRates[rate]}
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
