import React from 'react'
import { Provider } from 'react-redux'
import './App.scss'
import { store } from './store'
import RatesSelect from './components/RatesSelect'

function App(): JSX.Element {
    return (
        <Provider store={store}>
            <div className="App">
                <RatesSelect />
            </div>
        </Provider>
    )
}

export default App
