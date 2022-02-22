import { makeAutoObservable, runInAction } from 'mobx'
import { IRates, RatesState } from '../types/rates'

const url = 'https://open.er-api.com/v6/latest/UAH'

const initialState: RatesState = {
    rates: {},
    rate: 'UAH',
}

class Rates {
    rates: IRates = initialState.rates

    rate: string = initialState.rate

    constructor() {
        makeAutoObservable(this)
    }

    async getRates(): Promise<void> {
        await fetch(url)
            .then((response) => response.json())
            .then((data) => {
                runInAction(() => {
                    this.rates = data.rates
                })
            })
    }

    getRate(rate: string): void {
        this.rate = rate
    }
}

export default new Rates()
