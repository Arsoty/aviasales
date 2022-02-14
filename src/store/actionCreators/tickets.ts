import { Dispatch } from 'redux'
import { TicketAction, TicketActionTypes } from '../../types/ticket'

const url =
    'https://raw.githubusercontent.com/BrowningForce/aviasales-react/master/tickets.json'

export const fetchTickets = () => async (dispatch: Dispatch<TicketAction>) => {
    try {
        dispatch({ type: TicketActionTypes.FETCH_TICKETS })
        const response = await fetch(url).then((data) => data.json())
        console.log(response)
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
