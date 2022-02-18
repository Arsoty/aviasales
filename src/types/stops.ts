export interface StopsState {
    stops: Array<number>
}

export enum StopsActionTypes {
    STOPS_CHANGE = 'STOPS_CHANGE',
}

export interface GetStopsAction {
    type: StopsActionTypes.STOPS_CHANGE
    payload: number
}

export type TStopsAction = GetStopsAction
