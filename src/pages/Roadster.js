// eslint-disable-next-line
import React, { useContext } from 'react'
import HttpClient from '../components/HttpClient'
import { Card, Carousel, Container } from 'react-bootstrap'
import { FormatDate, FormatDistance } from '../utils/FormatDate'
import VideoPlayer from '../utils/VideoPlayer'
import InformationRoadster from '../components/InformationRoadster'
import Error from '../error/Error'
import ApiContext from '../utils/ApiContext'

const Roadster = () => {
    const AU = 149600000

    const { response, error } = useContext(ApiContext)

    let formattedSpeed
    let formattedWeight
    let earthDistance
    let marsDistance
    let apoapsis
    let periapsis
    let period_days
    let norad_id

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
        norad_id = response.norad_id
    }

    const informations = {
        speed: formattedSpeed,
        weight: formattedWeight,
        earthDistance: earthDistance,
        marsDistance: marsDistance,
        apoapsis: apoapsis,
        periapsis: periapsis,
        period_days: period_days,
        norad_id: norad_id,
    }

    return (
        <>
            <HttpClient endpoint={'roadster'} />

            {error && (
                <>
                    <Error error={error} />
                </>
            )}

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

                                <Card.Link href={response.wikipedia} target='_blank'>Link Wikipedia </Card.Link>
                            </Card.Body>

                            <div className='roadster text-center'>
                                <Card.Title className='m-auto mb-4'>Live Information</Card.Title>
                                <InformationRoadster informations={informations} />
                            </div>
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
