import { makeAutoObservable } from 'mobx'
import { IRates, RatesState } from '../types/rates'

const url = 'https://open.er-api.com/v6/latest/UAH'

const initialState: RatesState = {
    rates: {},
    loading: false,
    error: null,
}

class Rates {
    rates: IRates = initialState.rates

    error: string | null = initialState.error

    loading: boolean = initialState.loading

    constructor() {
        makeAutoObservable(this)
    }

    getRates(): void {
        this.loading = true
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                this.rates = data.rates
            })
            .catch(() => {
                this.error = `Ошибка при загрузке!`
            })
        this.loading = false
    }
}

export default new Rates()
