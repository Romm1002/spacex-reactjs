import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'
import HttpClient from './HttpClient'
import Error from '../error/Error'
import ApiContext from '../utils/ApiContext'

const Rockets = () => {
    const { response, error, reset } = useContext(ApiContext)

    return (
        <>
            <HttpClient endpoint='rockets' />

            {error && (
                <>
                    <Error error={error} />
                </>
            )}

            {response && (
                <div>
                    <div className='d-flex align-items-center justify-content-between my-4'>
                        <h1>SpaceX's rockets</h1>
                    </div>
                    <div className='row justify-content-around'>
                        {response.map((rocket) => (
                            <Card
                                key={rocket.id}
                                to={`${rocket.id}`}
                                className='card bg-light mb-4'
                                style={{
                                    width: '18rem',
                                    padding: '0',
                                    height: 'auto',
                                    textDecoration: 'none',
                                }}
                            >
                                <Carousel>
                                    {rocket.flickr_images.map((item, index) => (
                                        <Carousel.Item key={index}>
                                            <img
                                                className='d-block w-100'
                                                src={item}
                                                alt={`${index}`}
                                                style={{ height: '250px', objectFit: 'cover' }}
                                            />
                                        </Carousel.Item>
                                    ))}
                                </Carousel>
                                <Card.Body>
                                    <Card.Title>{rocket.name}</Card.Title>
                                    <p>
                                        <b>Height :</b> {rocket.height.meters} meters
                                    </p>
                                    <p>
                                        <b>Diameter :</b> {rocket.diameter.meters} meters
                                    </p>
                                    <p>
                                        <b>Mass :</b> {rocket.mass.kg.toLocaleString()} kg
                                    </p>
                                </Card.Body>
                                <Link key={rocket.id} onClick={reset} to={`${rocket.id}`}>
                                    <Button variant='info' className='my-3 mx-3'>
                                        More information
                                    </Button>
                                </Link>
                            </Card>
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}

export default Rockets
