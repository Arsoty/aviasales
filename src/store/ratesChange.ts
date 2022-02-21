import { makeAutoObservable } from 'mobx'
import { RatesChangeState } from '../types/rates'

export interface IStops {
    stops: Array<number>
}

const initialState: RatesChangeState = {
    rate: 'UAH',
}

class RatesChange {
    rate: string = initialState.rate

    constructor() {
        makeAutoObservable(this)
    }

    getRate(rate: string): void {
        this.rate = rate
    }
}

export default new RatesChange()
