import React from 'react'
import { Provider } from 'react-redux'
import './App.scss'
import { store } from './store'
import { TicketFilter } from './components/TicketFilter'
import TicketList from './components/TicketList'
import RatesSelect from './components/RatesSelect'

function App(): JSX.Element {
    return (
        <Provider store={store}>
            <div className="App">
                <RatesSelect />
                <TicketFilter />
                <TicketList />
            </div>
        </Provider>
    )
}

export default App
