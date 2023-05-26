import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CrewSearch from './CrewSearch'
import Card from 'react-bootstrap/Card'
import HttpClient from './HttpClient'
import Error from '../error/Error'
import ApiContext from '../utils/ApiContext'

const CrewComponent = () => {
    // eslint-disable-next-line
    const [filteredCrew, setFilteredCrew] = useState([])

    const { response, error } = useContext(ApiContext)

    // Convert strResponse to object
    useEffect(() => {
        setFilteredCrew(response)
    }, [response])

    const handleSearch = (searchTerm) => {
        // Filter members with searchbar value matching name or agency
        const filteredResults = response.filter(
            (member) =>
                member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                member.agency.toLowerCase().includes(searchTerm.toLowerCase()),
        )

        setFilteredCrew(filteredResults)
    }

    return (
        <>
            <HttpClient endpoint='crew' />

            {error && (
                <>
                    <Error error={error} />
                </>
            )}

            {response && (
                <div>
                    <div className='d-flex align-items-center justify-content-between my-4'>
                        <h1>SpaceX astronauts</h1>
                        <CrewSearch onSearch={handleSearch} />
                    </div>
                    <div className='row justify-content-around'>
                        {filteredCrew &&
                            filteredCrew.map((member) => (
                                <Link
                                    key={member.id}
                                    to={`member/${member.id}`}
                                    className='card bg-light mb-4'
                                    style={{
                                        width: '18rem',
                                        padding: '0',
                                        height: 'auto',
                                        textDecoration: 'none',
                                    }}
                                >
                                    <Card.Img
                                        src={member.image}
                                        variant='top'
                                        alt={member.name}
                                        style={{ objectFit: 'cover', height: '350px' }}
                                    />
                                    <Card.Body>
                                        <Card.Title>{member.name}</Card.Title>
                                    </Card.Body>
                                </Link>
                            ))}
                    </div>
                </div>
            )}
        </>
    )
}

export default CrewComponent
