import { createContext } from 'react'

const ApiContext = createContext({
    response: null,
    error: null,
    setResponse: () => {},
    setError: () => {},
    refreshApi: null,
    setRefreshApi: () => {},
    reset: () => {},
})

export default ApiContext
