import React, { useState } from 'react'
import './assets/styles/style.css'
import Routeur from './router/Routeur'
import 'bootstrap/dist/css/bootstrap.css'
import ApiContext from './utils/ApiContext'

function App() {
    const [response, setResponse] = useState(null)
    const [error, setError] = useState(null)
    const [refreshApi, setRefreshApi] = useState(true)

    const reset = () => {
        setResponse(null)
        setError(null)
        setRefreshApi(!refreshApi)
    }

    return (
        <ApiContext.Provider
            value={{ response, error, setResponse, setError, refreshApi, setRefreshApi, reset }}
        >
            <Routeur />
        </ApiContext.Provider>
    )
}

export default App
