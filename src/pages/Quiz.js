import React from 'react'
import quizzesData from '../data/data.json'
import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

const Quizs = () => {
    const quizzes = quizzesData.quizzes

    return (
        <Row>
            <Col className={'text-center mx-auto'} xs={12} md={8} lg={6}>
                <Card style={{ border: 'none' }}>
                    <Card.Body>
                        <Card.Title>
                            <h3>Choose a quizz !</h3>
                            <hr className={'w-75 mx-auto'} />
                        </Card.Title>
                        {quizzes.map((quiz, index) => (
                            <ListGroup as='ol' key={index}>
                                <ListGroup.Item
                                    key={index}
                                    as='li'
                                    className='text-center list-group-item-action mt-2'
                                >
                                    <div className='ms-2 me-auto'>
                                        <div className='row fw-bold'>
                                            <Link
                                                to={`/quiz/${index}`}
                                                style={{
                                                    textDecoration: 'none',
                                                    color: 'black',
                                                }}
                                            >
                                                <span style={{ fontSize: '1.5rem' }}>
                                                    {quiz.title}
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </ListGroup.Item>
                            </ListGroup>
                        ))}
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default Quizs
