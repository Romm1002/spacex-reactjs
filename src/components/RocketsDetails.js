import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Carousel from 'react-bootstrap/Carousel'
import Accordion from 'react-bootstrap/Accordion'
import HttpClient from './HttpClient'
import Error from '../error/Error'
import ApiContext from '../utils/ApiContext'

const RocketsDetails = () => {
    const { id } = useParams()

    const { response, error } = useContext(ApiContext)

    return (
        <>
            <HttpClient
                endpoint={`rockets/${id}`}
            />

            {error && (
                <>
                    <Error error={error} />
                </>
            )}

            {response ? (
                <>
                    <Link to='/rockets'>
                        <Button variant='secondary' className='my-3'>
                            Back
                        </Button>
                    </Link>
                    <div className='w-100 d-flex justify-content-center align-items-center'>
                        <Card style={{ width: '20rem' }}>
                            <Carousel>
                                {response.flickr_images.map((item, index) => (
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
                                <Card.Title>{response.name}</Card.Title>
                            </Card.Body>
                            <Accordion defaultActiveKey='0'>
                                <Accordion.Item eventKey='0'>
                                    <Accordion.Header>Features</Accordion.Header>
                                    <Accordion.Body>
                                        <p>
                                            <b>Country of origin :</b> {response.country}
                                        </p>
                                        <p>
                                            <b>Date of the first flight :</b>{' '}
                                            {response.first_flight}
                                        </p>
                                        <p>
                                            <b>Company :</b> {response.company}
                                        </p>
                                        <p>
                                            <b>Description :</b> {response.description}
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Card>
                    </div>
                </>
            ) : (
                <div>The rocket does not exist</div>
            )}
        </>
    )
}

export default RocketsDetails
