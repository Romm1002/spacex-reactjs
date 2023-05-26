import React, { useState, useEffect } from 'react'
import CardHistory from '../components/CardHistory'
import { Row } from 'react-bootstrap'
import HttpClient from '../components/HttpClient'
import Error from '../error/Error'

const ListHistory = () => {
    /** -------------- HTTP CLIENT -------------- **/
    // eslint-disable-next-line
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
            <div className='container'>
                <HttpClient
                    responseCallBack={setStrResponse}
                    errorCallBack={setError}
                    endpoint='history'
                />

                {error && (
                    <>
                        <Error error={error} />
                    </>
                )}

                <div className='mt-5'>
                    <h1>History of Space X</h1>
                    <div className='container mt-5'>
                        <Row>
                            {response &&
                                response.map((datum, id) => {
                                    return (
                                        <>
                                            <CardHistory key={id} history={datum} id={id} />
                                        </>
                                    )
                                })}
                        </Row>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListHistory
