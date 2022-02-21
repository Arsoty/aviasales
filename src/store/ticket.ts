import { makeAutoObservable } from 'mobx'
import { ITicket, ITickets, TicketState } from '../types/ticket'

const url1 = 'https://raw.githubusercontent.com/'
const url2 = 'BrowningForce/aviasales-react/master/tickets.json'

const initialState: TicketState = {
    tickets: [],
    loading: false,
    error: null,
    stops: [],
}

class Ticket {
    tickets: ITickets = initialState.tickets

    error: string | null = initialState.error

    loading: boolean = initialState.loading

    stops: number[] = initialState.stops

    constructor() {
        makeAutoObservable(this)
    }

    getTickets(stops: number[]): void {
        this.loading = true
        fetch(url1 + url2)
            .then((response) => response.json())
            .then((data) => {
                if (stops.includes(-1)) {
                    this.tickets = [
                        ...data.tickets.sort(
                            (a: ITicket, b: ITicket) => a.price - b.price
                        ),
                    ]
                } else {
                    this.tickets = [
                        ...data.tickets
                            .sort((a: ITicket, b: ITicket) => a.price - b.price)
                            .filter((ticket: ITicket) =>
                                stops.includes(ticket.stops)
                            ),
                    ]
                }
            })
            .catch(() => {
                this.error = `Ошибка при загрузке!`
            })
        this.loading = false
    }
}

export default new Ticket()
