import { Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import FormatDate from '../utils/FormatDate'

const CardHistory = ({ history }) => {
    return (
        <>
            <Col xl={4} lg={6} md={6} sm={12} className='mb-2'>
                <Card style={{ width: '24rem' }}>
                    <Link to={`/history/${history.id}`} style={{ textDecoration: 'none' }}>
                        <Card.Body>
                            <Card.Title>{history.title}</Card.Title>
                            <Card.Subtitle className='mb-2 text-muted'>
                                {FormatDate(history.event_date_unix)}
                            </Card.Subtitle>
                        </Card.Body>
                    </Link>
                </Card>
            </Col>
        </>
    )
}

export default CardHistory
