import { ListGroup, Row } from 'react-bootstrap'
import Information from './Information'

const InformationRoadster = ({ informations }) => {
    console.log(informations)
    return (
        <>
            <ListGroup className='list-group-flush roadster'>
                <Row className='p-0 m-0 '>
                    <Information title='Speed' information={informations.speed} />
                    <Information title='Weight' information={informations.weight} />
                </Row>
                <Row className='p-0 m-0 '>
                    <Information
                        title='Distance from Earth'
                        information={informations.earthDistance}
                    />
                    <Information
                        title='Distance from Mars'
                        information={informations.marsDistance}
                    />
                </Row>
                <Row className='p-0 m-0 '>
                    <Information title='NORAD identifier' information={informations.norad_id} />
                    <Information title='Period days' information={informations.period_days} />
                </Row>
                <Row className='p-0 m-0 '>
                    <Information title='Apoapsis' information={informations.apoapsis} />
                    <Information title='Periapsis' information={informations.periapsis} />
                </Row>
            </ListGroup>
        </>
    )
}

export default InformationRoadster
