import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import FormatDate from '../utils/FormatDate'
import HttpClient from '../components/HttpClient'
import Error from '../error/Error'
import ApiContext from '../utils/ApiContext'

const History = () => {
    const { id } = useParams()

    const { response, error, reset } = useContext(ApiContext)

    let countArticle = 0

    return (
        <>
            <HttpClient endpoint={`history/${id}`} />

            {error && (
                <>
                    <Error error={error} />
                </>
            )}

            {response && (
                <>
                    <div className='container ms-5 mt-5'>
                        <Link to='/history' onClick={reset}>
                            <Button variant='secondary'>Retour</Button>
                        </Link>
                    </div>
                    <div className='App-history'>
                        <h1 className='mt-5'>{response.title}</h1>

                        <h5 className='mt-5'>{response.details}</h5>

                        <p className='mt-5'>{FormatDate(response.event_date_unix)}</p>

                        {response.links &&
                            Object.values(response.links).map((link, id) => (
                                <div key={id} className='mt-5'>
                                    <p>
                                        article {++countArticle} : <a href={link}>{link}</a>
                                    </p>
                                </div>
                            ))}
                    </div>
                </>
            )}
        </>
    )
}

export default History
