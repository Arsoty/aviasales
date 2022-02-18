import { combineReducers } from 'redux'
import { ticketReducer } from './ticketReducer'
import { ratesReducer } from './ratesReducer'
import { stopsReducer } from './stopsReducer'
import { ratesChangeReducer } from './ratesChangeReducer'
import { modalsReducer } from './modalsReducer'

export const rootReducer = combineReducers({
    ticket: ticketReducer,
    rate: ratesReducer,
    stops: stopsReducer,
    ratechange: ratesChangeReducer,
    modals: modalsReducer,
})

export type RootState = ReturnType<typeof rootReducer>
