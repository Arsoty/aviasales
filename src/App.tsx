import React, { useState } from 'react'
import { Provider } from 'react-redux'
// import logo from './logo.svg';
import './App.css'
import { store } from './store'
// import TicketList from './components/TicketList'
import { TicketFilter } from './components/TicketFilter'
import RatesSelect from './components/RatesSelect'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <RatesSelect />
            </div>
        </Provider>
    )
}

export default App
