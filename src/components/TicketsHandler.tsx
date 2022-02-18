import React from 'react'
import { useDispatch } from 'react-redux'
import BuyForm from './BuyForm'
import { ITickets } from '../types/ticket'
import '../styles/TicketHandlerStyles.scss'
import SuccessForm from './SuccessForm'
import { useTypedSelector } from '../hooks/useTypeSelector'
import { getModals } from '../store/actionCreators/modals'

const TK1 = 'https://logos-world.net/wp-content/'
const TK2 = 'uploads/2020/03/Turkish-Airlines-Logo.png'
const S7 = 'https://upload.wikimedia.org/wikipedia/commons/c/c2/S7_new_logo.svg'
const SU1 = 'https://papik.pro/uploads/posts/2021-11/thumbs'
const SU2 = '/1636117382_50-papik-pro-p-aeroflot-logotip-foto-56.png'
const BA1 = 'https://logos-world.net/wp-content/'
const BA2 = 'uploads/2021/02/British-Airways-Logo.png'

interface ITicketsHandler {
    tickets: ITickets
    rate: number
    rateName: string
}

function TicketsHandler({
    tickets,
    rate,
    rateName,
}: ITicketsHandler): JSX.Element {
    const modals = useTypedSelector((state) => state.modals)
    const dispatch = useDispatch()
    return (
        <>
            {tickets.map((ticket) => (
                <div className="card mb-3">
                    <div className="cardBody">
                        {(ticket.carrier === 'TK' && (
                            <img
                                className="card-img"
                                src={TK1 + TK2}
                                alt="alt"
                            />
                        )) ||
                            (ticket.carrier === 'S7' && (
                                <img className="card-img" src={S7} alt="alt" />
                            )) ||
                            (ticket.carrier === 'SU' && (
                                <img
                                    className="card-img"
                                    src={SU1 + SU2}
                                    alt="alt"
                                />
                            )) ||
                            (ticket.carrier === 'BA' && (
                                <img
                                    className="card-img"
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
                                    onClick={() => dispatch(getModals(true))}
                                >
                                    {(ticket.price * rate).toFixed(2) +
                                        rateName}
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            ))}
            <BuyForm active={modals.buyFormActive} />
            <SuccessForm success={modals.successFormActive} />
        </>
    )
}

export default TicketsHandler
