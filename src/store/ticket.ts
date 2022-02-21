import { makeAutoObservable, runInAction } from 'mobx'
import { ITicket, ITickets, TicketState } from '../types/ticket'

const url1 = 'https://raw.githubusercontent.com/'
const url2 = 'BrowningForce/aviasales-react/master/tickets.json'

const initialState: TicketState = {
    tickets: [],
    loading: false,
    error: null,
}

class Ticket {
    tickets: ITickets = initialState.tickets

    error: string | null = initialState.error

    loading: boolean = initialState.loading

    constructor() {
        makeAutoObservable(this)
    }

    async getTickets(): Promise<void> {
        this.loading = true
        fetch(url1 + url2)
            .then((response) => response.json())
            .then((data) => {
                runInAction(() => {
                    this.tickets = [
                        ...data.tickets.sort(
                            (a: ITicket, b: ITicket) => a.price - b.price
                        ),
                    ]
                    this.loading = false
                })
            })
            .catch(() => {
                this.error = `Ошибка при загрузке!`
            })
    }
}

export default new Ticket()
