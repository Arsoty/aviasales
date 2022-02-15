import {
    TicketAction,
    TicketActionTypes,
    TicketState,
} from '../../types/ticket'

interface ITickets {
    [index: number]: ITicket
}

interface ITicket {
    origin: string
    origin_name: string
    destination: string
    destination_name: string
    departure_date: string
    departure_time: string
    arrival_date: string
    arrival_time: string
    carrier: string
    stops: number
    price: number
}

const initialState: TicketState = {
    tickets: [],
    loading: false,
    error: null,
}

export const ticketReducer = (
    // eslint-disable-next-line default-param-last
    state = initialState,
    action: TicketAction
): TicketState => {
    switch (action.type) {
        case TicketActionTypes.FETCH_TICKETS:
            return { loading: true, error: null, tickets: [] }
        case TicketActionTypes.FETCH_TICKETS_SUCCESS:
            return { loading: false, error: null, tickets: action.payload }
        case TicketActionTypes.FETCH_TICKETS_ERROR:
            return { loading: false, error: action.payload, tickets: [] }
        default:
            return state
    }
}
