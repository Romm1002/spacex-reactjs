import HttpClient from '../components/HttpClient'
import { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function CompanyPage() {
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
        <div id='company-wrapper' className={'text-light'}>
            <HttpClient
                responseCallBack={setStrResponse}
                errorCallBack={setError}
                endpoint='company'
            />

            <div className='text-center w-75 p-3 mt-3 mx-auto'>
                {response != null && (
                    <div className='mx-auto'>
                        <div className='mx-auto text-center w-50'>
                            <h3>About our company</h3>
                            <hr />
                        </div>
                        {/* Summary */}
                        <Row>
                            <Col xs={12}>
                                <Card className='w-100' style={{ border: 'none' }}>
                                    <Card.Body>
                                        <Card.Title>
                                            <b>Summary</b>
                                        </Card.Title>
                                        <Card.Text>{response.summary}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <hr />
                        {/* Headquarters card */}
                        <Row>
                            <Col xs={12} md={6} className='me-md-0'>
                                <Card className='w-100' style={{ border: 'none' }}>
                                    <Card.Body className=''>
                                        <Card.Title>
                                            <b>Headquarters</b>
                                        </Card.Title>
                                        <Card.Text>
                                            <ListGroup as='ol'>
                                                {Object.keys(response.headquarters).map(
                                                    (key, value) => {
                                                        return (
                                                            <ListGroup as='ol'>
                                                                <ListGroup.Item
                                                                    as='li'
                                                                    className='d-flex list-group-item-action justify-content-between mt-2 align-items-start'
                                                                >
                                                                    <div className='ms-2 me-auto'>
                                                                        <div className='row fw-bold'>
                                                                            {key}
                                                                        </div>
                                                                        <div className='row'>
                                                                            {
                                                                                response
                                                                                    .headquarters[
                                                                                    key
                                                                                ]
                                                                            }
                                                                        </div>
                                                                    </div>
                                                                </ListGroup.Item>
                                                            </ListGroup>
                                                        )
                                                    },
                                                )}
                                            </ListGroup>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col xs={12} md={6} className=''>
                                {/* Links card */}
                                <Card className='w-100' style={{ border: 'none' }}>
                                    <Card.Body className='ps-md-0'>
                                        <Card.Title>
                                            <b>Links</b>
                                        </Card.Title>
                                        <Card.Text>
                                            <ListGroup as='ol'>
                                                {Object.keys(response.links).map((key, value) => {
                                                    return (
                                                        <Link
                                                            to={response.links[key]}
                                                            target={'_blank'}
                                                            style={{ textDecoration: 'none' }}
                                                        >
                                                            <ListGroup as='ol'>
                                                                <ListGroup.Item
                                                                    as='li'
                                                                    className='d-flex list-group-item-action justify-content-between mt-2 align-items-start'
                                                                >
                                                                    <div className='ms-2 me-auto'>
                                                                        <div className='row fw-bold'>
                                                                            {key}
                                                                        </div>
                                                                        <div className='row'>
                                                                            {response.links[key]}
                                                                        </div>
                                                                    </div>
                                                                </ListGroup.Item>
                                                            </ListGroup>
                                                        </Link>
                                                    )
                                                })}
                                            </ListGroup>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>

                        <hr />

                        <Row>
                            {/* Others info card */}
                            <Card className='w-100' style={{ border: 'none' }}>
                                <Card.Body>
                                    <Card.Title>
                                        <b>Other Informations</b>
                                    </Card.Title>
                                    <Card.Text>
                                        <ListGroup as='ol'>
                                            <Row>
                                                {/* eslint-disable-next-line */}
                                                {Object.keys(response).map((key) => {
                                                    if (
                                                        ![
                                                            'headquarters',
                                                            'links',
                                                            'summary',
                                                        ].includes(key)
                                                    ) {
                                                        return (
                                                            <ListGroup
                                                                as='ol'
                                                                className='col-xs-12 col-md-6 col-lg-4'
                                                            >
                                                                <ListGroup.Item
                                                                    as='li'
                                                                    className='d-flex list-group-item-action justify-content-between mt-2 align-items-start'
                                                                >
                                                                    <div className='ms-2 me-auto'>
                                                                        <div className='row fw-bold'>
                                                                            {key}
                                                                        </div>
                                                                        <div className='row'>
                                                                            {response[key]}
                                                                        </div>
                                                                    </div>
                                                                </ListGroup.Item>
                                                            </ListGroup>
                                                        )
                                                    }
                                                })}
                                            </Row>
                                        </ListGroup>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Row>
                    </div>
                )}
            </div>
        </div>
    )

    // {

    //    "links": {
    //           "website": "https://www.spacex.com/",
    //           "flickr": "https://www.flickr.com/photos/spacex/",
    //           "twitter": "https://twitter.com/SpaceX",
    //           "elon_twitter": "https://twitter.com/elonmusk"
    //         },
    //    "name": "SpaceX",
    //    "founder": "Elon Musk",
    //    "founded": 2002,
    //    "employees": 9500,
    //    "vehicles": 4,
    //    "launch_sites": 3,
    //    "test_sites": 3,
    //    "ceo": "Elon Musk",
    //    "cto": "Elon Musk",
    //    "coo": "Gwynne Shotwell",
    //    "cto_propulsion": "Tom Mueller",
    //    "valuation": 74000000000,
    //    "summary": "SpaceX designs, manufactures and launches advanced rockets and spacecraft. The company was founded in 2002 to revolutionize space technology, with the ultimate goal of enabling people to live on other planets.",
    //    "id": "5eb75edc42fea42237d7f3ed"
    // }

    // - Les utilisateurs pourront accéder à des informations clés sur SpaceX, notamment son histoire, sa mission, ses réalisations, etc.
    // - Un filtre est attendus ici afin de chercher un membre d’équipage par son nom ou agence
}

export default CompanyPage
