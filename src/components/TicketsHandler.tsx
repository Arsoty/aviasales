import React, { useState } from 'react'
import BuyForm from './BuyForm'

interface Tickets {
    tickets: any[]
    rate: number
    rateName: string
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function TicketsHandler({ tickets, rate, rateName }: Tickets) {
    const [modalActive, setModalActive] = useState(false)
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
                                    onClick={() => setModalActive(true)}
                                >
                                    {ticket.price * rate + rateName}
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
