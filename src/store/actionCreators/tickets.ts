import { Dispatch } from 'redux'
import { ITicket, TicketAction, TicketActionTypes } from '../../types/ticket'

const url1 = 'https://raw.githubusercontent.com/'
const url2 = 'BrowningForce/aviasales-react/master/tickets.json'

interface Stops {
    stops: Array<number>
}

export const fetchTickets =
    ({ stops }: Stops) =>
    async (dispatch: Dispatch<TicketAction>) => {
        try {
            dispatch({ type: TicketActionTypes.FETCH_TICKETS })
            const response = await fetch(url1 + url2).then((data) =>
                data.json()
            )
            if (stops.includes(-1)) {
                dispatch({
                    type: TicketActionTypes.FETCH_TICKETS_SUCCESS,
                    payload: response.tickets.sort(
                        (a: ITicket, b: ITicket) => a.price - b.price
                    ),
                    stops,
                })
            } else {
                dispatch({
                    type: TicketActionTypes.FETCH_TICKETS_SUCCESS,
                    payload: response.tickets
                        .sort((a: ITicket, b: ITicket) => a.price - b.price)
                        .filter((el: ITicket) => stops.includes(el.stops)),
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
