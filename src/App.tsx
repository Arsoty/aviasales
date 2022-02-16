import React from 'react'
import { Provider } from 'react-redux'
import './App.scss'
import { store } from './store'
import { TicketFilter } from './components/TicketFilter'

function App(): JSX.Element {
    return (
        <Provider store={store}>
            <div className="App">
                <TicketFilter />
            </div>
        </Provider>
    )
}

export default App
