import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CrewSearch from './CrewSearch'
import Card from 'react-bootstrap/Card'
import HttpClient from './HttpClient'

const CrewComponent = () => {
    // eslint-disable-next-line
    const [filteredCrew, setFilteredCrew] = useState([])
    const [filteredCompany, setFilteredCompany] = useState([])

    /** -------------- HTTP CLIENT -------------- **/
    // eslint-disable-next-line
    const [error, setError] = useState(null)
    const [strResponse, setStrResponse] = useState(null)
    const [response, setResponse] = useState(null)

    // Convert strResponse to object
    useEffect(() => {
        setResponse(JSON.parse(strResponse))
        setFilteredCrew(JSON.parse(strResponse))
        setFilteredCompany(JSON.parse(strResponse))
    }, [strResponse])

    /** -------------- HTTP CLIENT -------------- **/

    const handleSearch = (searchTerm) => {
        const filteredResults = response.filter((member) =>
            member.name.toLowerCase().includes(searchTerm.toLowerCase()),
        )
        setFilteredCrew(filteredResults)
        setFilteredCompany(filteredResults)
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
                        {(filteredCrew || filteredCompany) &&
                            filteredCrew.map((member) => (
                                <Link
                                    key={member.id}
                                    to={`member/${member.id}`}
                                    class='card-crew'
                                    style={{
                                        width: '18rem',
                                        height: '400px',
                                        marginBottom: '2rem',
                                    }}
                                >
                                    <img
                                        src={member.image}
                                        alt='balloon with an emoji face'
                                        className='card-crew__img'
                                    />
                                    <span className='card-crew__footer'>
                                        <span>{member.name}</span>
                                        <span>{member.status == 'active' ? 'Actif' : ''}</span>
                                    </span>
                                </Link>
                            ))}
                    </div>
                </div>
            )}
        </>
    )
}

export default CrewComponent
