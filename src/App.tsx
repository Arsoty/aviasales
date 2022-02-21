import React from 'react'
import './App.scss'
import { TicketFilter } from './components/TicketFilter'
import TicketList from './components/TicketList'
import RatesSelect from './components/RatesSelect'

function App(): JSX.Element {
    return (
        <div className="App">
            <RatesSelect />
            <TicketFilter />
            <TicketList />
        </div>
    )
}

export default App
