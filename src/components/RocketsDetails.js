import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Accordion from "react-bootstrap/Accordion";

const RocketsDetails = () => {
    const {id} = useParams();
    const apiUrl = `https://api.spacexdata.com/v4/rockets/${id}`;
    const [rocketData, setRocketData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(apiUrl);
                setRocketData(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [apiUrl]);

    if (!rocketData) {
        return <div>La fusée n'existe pas</div>;
    }

    const {name, flickr_images, country, first_flight, company, description} =
        rocketData;

    return (
        <>
            <Link to="/rockets">
                <Button variant="secondary" className="my-3">
                    Retour
                </Button>
            </Link>
            <div className="w-100 d-flex justify-content-center align-items-center">
                <Card style={{width: "20rem"}}>
                    <Carousel>
                        {flickr_images.map((item, index) => (
                            <Carousel.Item key={index}>
                                <img
                                    className="d-block w-100"
                                    src={item}
                                    alt={`${index}`}
                                    style={{height: "250px", objectFit: "cover"}}
                                />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                    </Card.Body>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Caractéristiques</Accordion.Header>
                            <Accordion.Body>
                                <p>
                                    <b>Pays d'origine :</b> {country}
                                </p>
                                <p>
                                    <b>Date du premier vol :</b> {first_flight}
                                </p>
                                <p>
                                    <b>Compagnie :</b> {company}
                                </p>
                                <p>
                                    <b>Description :</b> {description}
                                </p>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Card>
            </div>
        </>
    );
};

export default RocketsDetails;
