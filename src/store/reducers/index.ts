import { combineReducers } from 'redux'
import { ticketReducer } from './ticketReducer'
import { ratesReducer } from './ratesReducer'
import { stopsReducer } from './stopsReducer'
import { ratesChangeReducer } from './ratesChangeReducer'

export const rootReducer = combineReducers({
    ticket: ticketReducer,
    rate: ratesReducer,
    stops: stopsReducer,
    ratechange: ratesChangeReducer,
})

export type RootState = ReturnType<typeof rootReducer>
