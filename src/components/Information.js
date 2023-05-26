import { Col, ListGroup } from "react-bootstrap"

const Information = ({ title, information }) => {
    return (
        <Col className='p-0 m-0'>
            <ListGroup.Item className='text-center roadster' style={{ lineHeight: 'auto' }}>
                <p className='mb-0'>
                    <b>{title} : </b>
                    {information}
                </p>
            </ListGroup.Item>
        </Col>
    )
}

export default Information
