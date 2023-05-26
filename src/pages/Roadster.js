import React, { useState, useEffect } from 'react'
import HttpClient from '../components/HttpClient'
import { Card, Carousel, Col, Container, ListGroup, Row } from 'react-bootstrap'
import { FormatDate, FormatDistance } from '../utils/FormatDate'
import VideoPlayer from '../utils/VideoPlayer'

const Roadster = () => {
    /** -------------- HTTP CLIENT -------------- **/
    const [error, setError] = useState(null)
    const [strResponse, setStrResponse] = useState(null)
    const [response, setResponse] = useState(null)
    const AU = 149600000

    // Convert strResponse to object
    useEffect(() => {
        setResponse(JSON.parse(strResponse))
    }, [strResponse])

    /** -------------- HTTP CLIENT -------------- **/

    let formattedSpeed
    let formattedWeight
    let earthDistance
    let marsDistance
    let apoapsis
    let periapsis
    let period_days

    // On formatte les données
    if (response) {
        formattedSpeed =
            response.speed_kph.toFixed(2) + ' Kph / ' + response.speed_mph.toFixed(2) + ' Mph'

        formattedWeight = response.launch_mass_kg + ' Kg / ' + response.launch_mass_lbs + ' lbs'

        earthDistance = FormatDistance(response.earth_distance_km)
        marsDistance = FormatDistance(response.mars_distance_km)
        apoapsis = FormatDistance(response.apoapsis_au * AU)
        periapsis = FormatDistance(response.periapsis_au * AU)

        apoapsis = apoapsis + ' / ' + response.apoapsis_au.toFixed(2) + ' AU '
        periapsis = periapsis + ' / ' + response.periapsis_au.toFixed(2) + ' AU '

        period_days = response.period_days.toFixed(0) + ' Days'
    }

    return (
        <>
            <HttpClient
                responseCallBack={setStrResponse}
                errorCallBack={setError}
                endpoint='roadster'
            />
            {response && (
                <>
                    <Container className='mt-5'>
                        <Card>
                            <Carousel>
                                {response.flickr_images.map((item, index) => (
                                    <Carousel.Item key={index}>
                                        <img
                                            className='d-block w-100'
                                            src={item}
                                            alt={`${index}`}
                                            style={{ height: '500px', objectFit: 'cover' }}
                                        />
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                            <Card.Body>
                                <Card.Title>{response.name}</Card.Title>
                                <Card.Subtitle className='mb-2 text-muted'>
                                    {FormatDate(response.launch_date_unix)}
                                </Card.Subtitle>
                                <Card.Text>{response.details}</Card.Text>

                                <Card.Link href={response.wikipedia}>Link Wikipedia </Card.Link>
                            </Card.Body>
                            <Card.Title className='m-auto mb-4'>Live Information</Card.Title>
                            <ListGroup className='list-group-flush'>
                                <Row className='p-0 m-0 '>
                                    <Col className='p-0 m-0'>
                                        <ListGroup.Item
                                            className='text-center'
                                            style={{ lineHeight: 'auto' }}
                                        >
                                            <p className='mb-0'>
                                                <b>Speed : </b>
                                                {formattedSpeed}
                                            </p>
                                        </ListGroup.Item>
                                    </Col>
                                    <Col className='p-0 m-0'>
                                        <ListGroup.Item
                                            className='text-center'
                                            style={{ lineHeight: 'auto' }}
                                        >
                                            <p className='mb-0'>
                                                <b>Weight : </b> {formattedWeight}
                                            </p>
                                        </ListGroup.Item>
                                    </Col>
                                </Row>
                                <Row className='p-0 m-0 '>
                                    <Col className='p-0 m-0'>
                                        <ListGroup.Item
                                            className='text-center'
                                            style={{ lineHeight: 'auto' }}
                                        >
                                            <p className='mb-0'>
                                                <b>Distance from Earth : </b>
                                                {earthDistance}
                                            </p>
                                        </ListGroup.Item>
                                    </Col>
                                    <Col className='p-0 m-0'>
                                        <ListGroup.Item
                                            className='text-center'
                                            style={{ lineHeight: 'auto' }}
                                        >
                                            <p className='mb-0'>
                                                <b>Distance from Mars : </b> {marsDistance}
                                            </p>
                                        </ListGroup.Item>
                                    </Col>
                                </Row>
                                <Row className='p-0 m-0 '>
                                    <Col className='p-0 m-0'>
                                        <ListGroup.Item
                                            className='text-center'
                                            style={{ lineHeight: 'auto' }}
                                        >
                                            <p className='mb-0'>
                                                <b>NORAD identifier : </b>
                                                {response.norad_id}
                                            </p>
                                        </ListGroup.Item>
                                    </Col>
                                    <Col className='p-0 m-0'>
                                        <ListGroup.Item
                                            className='text-center'
                                            style={{ lineHeight: 'auto' }}
                                        >
                                            <p className='mb-0'>
                                                <b>period_days : </b>
                                                {period_days}
                                            </p>
                                        </ListGroup.Item>
                                    </Col>
                                </Row>
                                <Row className='p-0 m-0 '>
                                    <Col className='p-0 m-0'>
                                        <ListGroup.Item
                                            className='text-center'
                                            style={{ lineHeight: 'auto' }}
                                        >
                                            <p className='mb-0'>
                                                <b>Apoapsis : </b>
                                                {apoapsis}
                                            </p>
                                        </ListGroup.Item>
                                    </Col>
                                    <Col className='p-0 m-0'>
                                        <ListGroup.Item
                                            className='text-center'
                                            style={{ lineHeight: 'auto' }}
                                        >
                                            <p className='mb-0'>
                                                <b>periapsis : </b> {periapsis}
                                            </p>
                                        </ListGroup.Item>
                                    </Col>
                                </Row>
                            </ListGroup>
                            <Card.Body>
                                <div className='text-center'>
                                    <VideoPlayer videoId='wbSwFU6tY1c' />
                                </div>
                            </Card.Body>
                        </Card>
                    </Container>
                </>
            )}
        </>
    )
}

export default Roadster
