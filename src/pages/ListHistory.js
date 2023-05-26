import React, { useContext } from 'react'
import CardHistory from '../components/CardHistory'
import { Row } from 'react-bootstrap'
import HttpClient from '../components/HttpClient'
import Error from '../error/Error'
import ApiContext from '../utils/ApiContext'

const ListHistory = () => {
    const { response, error } = useContext(ApiContext)
    
    return (
        <>
            <div className='container'>
                <HttpClient endpoint='history' />

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
                                    return <CardHistory key={id} history={datum} id={id} />
                                })}
                        </Row>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListHistory
