import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CrewSearch from './CrewSearch'
import Card from 'react-bootstrap/Card'
import HttpClient from './HttpClient'

const CrewComponent = () => {
    // eslint-disable-next-line
    const [filteredCrew, setFilteredCrew] = useState([])

    /** -------------- HTTP CLIENT -------------- **/
    // eslint-disable-next-line
    const [error, setError] = useState(null)
    const [strResponse, setStrResponse] = useState(null)
    const [response, setResponse] = useState(null)

    // Convert strResponse to object
    useEffect(() => {
        setResponse(JSON.parse(strResponse))
        setFilteredCrew(JSON.parse(strResponse))
    }, [strResponse])

    /** -------------- HTTP CLIENT -------------- **/

    const handleSearch = (searchTerm) => {
        console.log(response)

        // Filter members with searchbar value matching name or agency
        const filteredResults = response.filter((member) =>
            (member.name.toLowerCase().includes(searchTerm.toLowerCase()) || member.agency.toLowerCase().includes(searchTerm.toLowerCase())),
        )

        console.log(filteredResults)

        setFilteredCrew(filteredResults)
    }

    return (
        <>
            <HttpClient
                responseCallBack={setStrResponse}
                errorCallBack={setError}
                endpoint='crew'
            />
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
