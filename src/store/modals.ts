import { makeAutoObservable } from 'mobx'
import { IModalsState } from '../types/modals'

const initialState: IModalsState = {
    modals: [false, false],
}

class Modals {
    modals: boolean[] = initialState.modals

    constructor() {
        makeAutoObservable(this)
    }

    changeModals(modals: boolean[]): void {
        this.modals = modals
    }
}

export default new Modals()
