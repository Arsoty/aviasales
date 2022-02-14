/* eslint-disable react/function-component-definition */
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
// import { useSelector } from 'react-redux'
import { useTypedSelector } from '../hooks/useTypeSelector'
import { fetchTickets } from '../store/actionCreators/tickets'

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
        const g = tickets.filter((ticket) => ticket.stops === stops)
        return (
            <>
                {g.map((ticket) => (
                    <div className="card mb-3">
                        <div className="cardBody">
                            {(ticket.carrier === 'TK' && (
                                <img
                                    className="card-img-top"
                                    src="https://logos-world.net/wp-content/uploads/2020/03/Turkish-Airlines-Logo.png"
                                    alt="alt"
                                />
                            )) ||
                                (ticket.carrier === 'S7' && (
                                    <img
                                        className="card-img-top"
                                        src="https://upload.wikimedia.org/wikipedia/commons/c/c2/S7_new_logo.svg"
                                        alt="alt"
                                    />
                                )) ||
                                (ticket.carrier === 'SU' && (
                                    <img
                                        className="card-img-top"
                                        src="https://www.airchampion24.com/sites/default/files/xaeroflot_logo_0.jpg.pagespeed.ic.vL6W6vtDFv.jpg"
                                        alt="alt"
                                    />
                                )) ||
                                (ticket.carrier === 'BA' && (
                                    <img
                                        className="card-img-top"
                                        src="https://logos-world.net/wp-content/uploads/2021/02/British-Airways-Logo-1997-present.jpg"
                                        alt="alt"
                                    />
                                ))}
                            <div className="card-body">
                                <h5 className="card-title">{ticket.carrier}</h5>
                                <div className="cardInfo">
                                    <div>
                                        <p className="cardText">
                                            {ticket.origin_name},{ticket.origin}
                                        </p>
                                        <p>{ticket.departure_date}</p>
                                    </div>
                                    <p className="card-text">
                                        {ticket.departure_time}
                                        {`-----Пересадок: ${ticket.stops}----->`}
                                        {ticket.arrival_time}
                                    </p>
                                    <div>
                                        <p className="cardText">
                                            {ticket.destination_name},{' '}
                                            {ticket.destination}
                                        </p>
                                        <p>{ticket.arrival_date}</p>
                                    </div>
                                </div>
                                <p className="card-text">
                                    <button
                                        type="submit"
                                        className="btn btn-warning"
                                    >
                                        {ticket.price}грн.
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </>
        )
    }

    if (loading) {
        return <div>Загрузка билетов!</div>
    }
    if (error) {
        return <div>{error}</div>
    }
    return (
        <>
            {tickets.map((ticket) => (
                <div className="card mb-3">
                    <div className="cardBody">
                        {(ticket.carrier === 'TK' && (
                            <img
                                className="card-img-top"
                                src="https://logos-world.net/wp-content/uploads/2020/03/Turkish-Airlines-Logo.png"
                                alt="alt"
                            />
                        )) ||
                            (ticket.carrier === 'S7' && (
                                <img
                                    className="card-img-top"
                                    src="https://upload.wikimedia.org/wikipedia/commons/c/c2/S7_new_logo.svg"
                                    alt="alt"
                                />
                            )) ||
                            (ticket.carrier === 'SU' && (
                                <img
                                    className="card-img-top"
                                    src="https://www.airchampion24.com/sites/default/files/xaeroflot_logo_0.jpg.pagespeed.ic.vL6W6vtDFv.jpg"
                                    alt="alt"
                                />
                            )) ||
                            (ticket.carrier === 'BA' && (
                                <img
                                    className="card-img-top"
                                    src="https://logos-world.net/wp-content/uploads/2021/02/British-Airways-Logo-1997-present.jpg"
                                    alt="alt"
                                />
                            ))}
                        <div className="card-body">
                            <h5 className="card-title">{ticket.carrier}</h5>
                            <div className="cardInfo">
                                <div>
                                    <p className="cardText">
                                        {ticket.origin_name},{ticket.origin}
                                    </p>
                                    <p>{ticket.departure_date}</p>
                                </div>
                                <p className="card-text">
                                    {ticket.departure_time}
                                    {`-----Пересадок: ${ticket.stops}----->`}
                                    {ticket.arrival_time}
                                </p>
                                <div>
                                    <p className="cardText">
                                        {ticket.destination_name},{' '}
                                        {ticket.destination}
                                    </p>
                                    <p>{ticket.arrival_date}</p>
                                </div>
                            </div>
                            <p className="card-text">
                                <button
                                    type="submit"
                                    className="btn btn-warning"
                                >
                                    {ticket.price}грн.
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default TicketList
