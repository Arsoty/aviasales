import { Dispatch } from 'redux'
import { TicketAction, TicketActionTypes } from '../../types/ticket'

const url1 = 'https://raw.githubusercontent.com/'
const url2 = 'BrowningForce/aviasales-react/master/tickets.json'

export const fetchTickets = () => async (dispatch: Dispatch<TicketAction>) => {
    try {
        dispatch({ type: TicketActionTypes.FETCH_TICKETS })
        const response = await fetch(url1 + url2).then((data) => data.json())
        dispatch({
            type: TicketActionTypes.FETCH_TICKETS_SUCCESS,
            payload: response.tickets,
        })
    } catch (e) {
        dispatch({
            type: TicketActionTypes.FETCH_TICKETS_ERROR,
            payload: 'Произошла ошибка!',
        })
    }
}
