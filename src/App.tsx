import React from 'react'
import { Provider } from 'react-redux'
// import logo from './logo.svg';
import './App.css'
import { store } from './store'
import TicketList from './components/TicketList'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <TicketList />
            </div>
        </Provider>
    )
}

export default App
