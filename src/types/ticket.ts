export interface TicketState {
    tickets: ITickets
    loading: boolean
    error: null | string
    stops: Array<number>
}

export type ITickets = ITicket[]

export interface ITicket {
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
    payload: ITickets
    stops: Array<number>
}

interface FetchTicketsErrorAction {
    type: TicketActionTypes.FETCH_TICKETS_ERROR
    payload: string
}

export type TTicketAction =
    | FetchTicketsAction
    | FetchTicketsSuccessAction
    | FetchTicketsErrorAction
