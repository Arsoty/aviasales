import { combineReducers } from 'redux'
import { ticketReducer } from './ticketReducer'
import { ratesReducer } from './ratesReducer'
import { stopsReducer } from './stopsReducer'

export const rootReducer = combineReducers({
    ticket: ticketReducer,
    rate: ratesReducer,
    stops: stopsReducer,
})

export type RootState = ReturnType<typeof rootReducer>
