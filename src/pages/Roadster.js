import React, { useState, useEffect } from 'react'
import HttpClient from '../components/HttpClient'

const Roadster = () => {
    /** -------------- HTTP CLIENT -------------- **/
    const [error, setError] = useState(null)
    const [strResponse, setStrResponse] = useState(null)
    const [response, setResponse] = useState(null)

    // Convert strResponse to object
    useEffect(() => {
        setResponse(JSON.parse(strResponse))
    }, [strResponse])

    /** -------------- HTTP CLIENT -------------- **/

    return (
        <>
            <HttpClient
                responseCallBack={setStrResponse}
                errorCallBack={setError}
                endpoint='roadster'
            />
            {response && (
                <>
                    <h1>{response.name}</h1>
                </>
            )}
        </>
    )
}

export default Roadster
