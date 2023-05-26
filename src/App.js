import React, { useState } from 'react'
import './assets/styles/style.css'
import Routeur from './router/Routeur'
import 'bootstrap/dist/css/bootstrap.css'
import ApiContext from './utils/ApiContext'

function App() {
    const [response, setResponse] = useState(null)
    const [error, setError] = useState(null)

    return (
        <ApiContext.Provider value={{ response, error, setResponse, setError }}>
            <Routeur />
        </ApiContext.Provider>
    )
}

export default App
