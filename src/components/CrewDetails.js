import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const CrewMemberPage = () => {
    const {id} = useParams();
    const apiUrl = `https://api.spacexdata.com/v4/crew/${id}`;
    const [memberData, setMemberData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(apiUrl);
                setMemberData(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [apiUrl]);

    if (!memberData) {
        return <div>Le membre n'existe pas</div>;
    }

    const {name, agency, status, image, wikipedia} = memberData;

    return (
        <div>
            <Link to="/">
                <Button variant="secondary" className="my-3">
                    Retour
                </Button>
            </Link>
            <div className="w-100 d-flex justify-content-center align-items-center">
                <Card style={{width: "18rem"}}>
                    <Card.Img variant="top" src={image} alt={name}/>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>
                            <b>Agence :</b> {agency}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <b>Status :</b> {status === "active" ? "Actif" : ""}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <b>Wikipédia :</b> <a href={wikipedia}>Accéder</a>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </div>
        </div>
    );
};

export default CrewMemberPage;
