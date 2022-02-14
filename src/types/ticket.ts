export interface TicketState {
    tickets: any[]
    loading: boolean
    error: null | string
}

export enum TicketActionTypes {
    FETCH_TICKETS = 'FETCH_TICKETS',
    FETCH_TICKETS_SUCCESS = 'FETCH_TICKETS_SUCCESS',
    FETCH_TICKETS_ERROR = 'FETCH_TICKETS_ERROR',
}

interface FetchTicketsAction {
    type: TicketActionTypes.FETCH_TICKETS
}

interface FetchTicketsSuccessAction {
    type: TicketActionTypes.FETCH_TICKETS_SUCCESS
    payload: any[]
}

interface FetchTicketsErrorAction {
    type: TicketActionTypes.FETCH_TICKETS_ERROR
    payload: string
}

export type TicketAction =
    | FetchTicketsAction
    | FetchTicketsSuccessAction
    | FetchTicketsErrorAction
