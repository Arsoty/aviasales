import React, { useState } from 'react'
import BuyForm from './BuyForm'
import { ITickets } from '../types/ticket'
import '../styles/TicketHandlerStyles.scss'

const TK1 = 'https://logos-world.net/wp-content/'
const TK2 = 'uploads/2020/03/Turkish-Airlines-Logo.png'
const S7 = 'https://upload.wikimedia.org/wikipedia/commons/c/c2/S7_new_logo.svg'
const SU1 = 'https://www.airchampion24.com/sites/default/files/'
const SU2 = 'xaeroflot_logo_0.jpg.pagespeed.ic.vL6W6vtDFv.jpg'
const BA1 = 'https://logos-world.net/wp-content/uploads/'
const BA2 = '2021/02/British-Airways-Logo-1997-present.jpg'

interface Tickets {
    tickets: ITickets
    rate: number
    rateName: string
}

function TicketsHandler({ tickets, rate, rateName }: Tickets): JSX.Element {
    const [modalActive, setModalActive] = useState(false)
    return (
        <>
            {tickets.map((ticket) => (
                <div className="card mb-3">
                    <div className="cardBody">
                        {(ticket.carrier === 'TK' && (
                            <img
                                className="card-img-top"
                                src={TK1 + TK2}
                                alt="alt"
                            />
                        )) ||
                            (ticket.carrier === 'S7' && (
                                <img
                                    className="card-img-top"
                                    src={S7}
                                    alt="alt"
                                />
                            )) ||
                            (ticket.carrier === 'SU' && (
                                <img
                                    className="card-img-top"
                                    src={SU1 + SU2}
                                    alt="alt"
                                />
                            )) ||
                            (ticket.carrier === 'BA' && (
                                <img
                                    className="card-img-top"
                                    src={BA1 + BA2}
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
                                    onClick={() => setModalActive(true)}
                                >
                                    {(ticket.price * rate).toFixed(2) +
                                        rateName}
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            ))}
            <BuyForm active={modalActive} setActive={setModalActive} />
        </>
    )
}

export default TicketsHandler
