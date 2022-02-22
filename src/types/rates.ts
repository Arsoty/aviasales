export interface RatesState {
    rates: IRates
    rate: string
}

export type IRates = {
    [key: string]: number
}
