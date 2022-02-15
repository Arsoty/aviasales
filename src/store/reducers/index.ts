import { combineReducers } from 'redux'
import { ticketReducer } from './ticketReducer'
import { ratesReducer } from './ratesReducer'

export const rootReducer = combineReducers({
    ticket: ticketReducer,
    rate: ratesReducer,
})

export type RootState = ReturnType<typeof rootReducer>
