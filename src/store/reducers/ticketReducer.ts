import {
    TTicketAction,
    TicketActionTypes,
    TicketState,
} from '../../types/ticket'

const initialState: TicketState = {
    tickets: [],
    loading: false,
    error: null,
    stops: [],
}

export const ticketReducer = (
    // eslint-disable-next-line default-param-last
    state = initialState,
    action: TTicketAction
): TicketState => {
    switch (action.type) {
        case TicketActionTypes.FETCH_TICKETS:
            return { loading: true, error: null, tickets: [], stops: [] }
        case TicketActionTypes.FETCH_TICKETS_SUCCESS:
            return {
                loading: false,
                error: null,
                tickets: action.payload,
                stops: action.stops,
            }
        case TicketActionTypes.FETCH_TICKETS_ERROR:
            return {
                loading: false,
                error: action.payload,
                tickets: [],
                stops: [],
            }
        default:
            return state
    }
}
