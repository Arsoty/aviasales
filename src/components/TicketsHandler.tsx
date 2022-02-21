import React from 'react'
import { ITickets } from '../types/ticket'
import '../styles/TicketHandlerStyles.scss'
import modals from '../store/modals'

const TK1 = 'https://logos-world.net/wp-content/'
const TK2 = 'uploads/2020/03/Turkish-Airlines-Logo.png'
const S7 = 'https://upload.wikimedia.org/wikipedia/commons/c/c2/S7_new_logo.svg'
const SU1 = 'https://papik.pro/uploads/posts/2021-11/thumbs'
const SU2 = '/1636117382_50-papik-pro-p-aeroflot-logotip-foto-56.png'
const BA1 = 'https://logos-world.net/wp-content/'
const BA2 = 'uploads/2021/02/British-Airways-Logo.png'
const CARRIER_NOT_FOUND =
    'https://cdn-icons-png.flaticon.com/512/2748/2748558.png'

interface ITicketsHandler {
    tickets: ITickets
    rate: number
    rateName: string
}

function carrierImage(carrier: string): JSX.Element {
    if (carrier === 'TK') {
        return <img className="card-img" src={TK1 + TK2} alt="alt" />
    }
    if (carrier === 'S7') {
        return <img className="card-img" src={S7} alt="alt" />
    }
    if (carrier === 'SU') {
        return <img className="card-img" src={SU1 + SU2} alt="alt" />
    }
    if (carrier === 'BA') {
        return <img className="card-img" src={BA1 + BA2} alt="alt" />
    }
    return <img className="card-img" src={CARRIER_NOT_FOUND} alt="alt" />
}

function TicketsHandler({
    tickets,
    rate,
    rateName,
}: ITicketsHandler): JSX.Element {
    return (
        <>
            {tickets.map((ticket) => (
                <div
                    key={
                        ticket.arrival_date +
                        ticket.arrival_time +
                        ticket.carrier +
                        ticket.departure_date +
                        ticket.departure_time +
                        ticket.destination +
                        ticket.destination_name +
                        ticket.origin +
                        ticket.origin_name +
                        ticket.price +
                        ticket.stops
                    }
                    // key={Math.random()}
                    className="card mb-3"
                >
                    <div className="cardBody">
                        {carrierImage(ticket.carrier)}
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
                                    onClick={() =>
                                        modals.changeModals([true, false])
                                    }
                                >
                                    {(ticket.price * rate).toFixed(2) +
                                        rateName}
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default TicketsHandler
