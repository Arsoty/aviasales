import React from 'react'
import { Provider } from 'react-redux'
import './App.css'
import { store } from './store'
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
