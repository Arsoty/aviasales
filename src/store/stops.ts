import { makeAutoObservable } from 'mobx'
import { StopsState } from '../types/stops'

export interface IStops {
    stops: Array<number>
}

const initialState: StopsState = {
    stops: [-1, 0, 1, 2, 3],
}

class Stops {
    stops: number[] = initialState.stops

    constructor() {
        makeAutoObservable(this)
    }

    getStops(stop: number): void {
        if (stop === -1 && this.stops.length !== 5) {
            this.stops = initialState.stops
        } else if (stop === -1 && this.stops.length === 5) {
            this.stops = []
        } else {
            this.stops = this.stops.includes(stop)
                ? this.stops.filter(
                      (thisStop) => thisStop !== stop && thisStop !== -1
                  )
                : [...this.stops, stop]
        }
    }
}

export default new Stops()
