import { Dispatch } from 'redux'
import { ITicket, TTicketAction, TicketActionTypes } from '../../types/ticket'

const url1 = 'https://raw.githubusercontent.com/'
const url2 = 'BrowningForce/aviasales-react/master/tickets.json'

interface IStops {
    stops: Array<number>
}

export const fetchTickets =
    ({ stops }: IStops) =>
    async (dispatch: Dispatch<TTicketAction>) => {
        try {
            dispatch({ type: TicketActionTypes.FETCH_TICKETS })
            const response = await fetch(url1 + url2).then((data) =>
                data.json()
            )
            response.tickets.sort((a: ITicket, b: ITicket) => a.price - b.price)
            if (stops.includes(-1)) {
                dispatch({
                    type: TicketActionTypes.FETCH_TICKETS_SUCCESS,
                    payload: response.tickets,
                    stops,
                })
            } else {
                dispatch({
                    type: TicketActionTypes.FETCH_TICKETS_SUCCESS,
                    payload: response.tickets.filter((el: ITicket) =>
                        stops.includes(el.stops)
                    ),
                    stops,
                })
            }
        } catch (e) {
            dispatch({
                type: TicketActionTypes.FETCH_TICKETS_ERROR,
                payload: 'Произошла ошибка!',
            })
        }
    }
