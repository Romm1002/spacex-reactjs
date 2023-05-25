import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

const Rockets = () => {
  const apiUrl = "https://api.spacexdata.com/v4/rockets";
  const [rocketData, setRocketData] = useState([]);

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
  }, []);

  return (
    <div>
      <div className="d-flex align-items-center justify-content-between my-4">
        <h1>Les fusées de SpaceX</h1>
      </div>
      <div className="row justify-content-around">
        {rocketData.map((rocket) => (
          <Card
            key={rocket.id}
            to={`${rocket.id}`}
            className="card bg-light mb-4"
            style={{
              width: "18rem",
              padding: "0",
              height: "auto",
              textDecoration: "none",
            }}
          >
            <Carousel>
              {rocket.flickr_images.map((item, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={item}
                    alt={`${index}`}
                    style={{ height: "250px", objectFit: "cover" }}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
            <Card.Body>
              <Card.Title>{rocket.name}</Card.Title>
              <p>
                <b>Hauteur :</b> {rocket.height.meters} mètres
              </p>
              <p>
                <b>Diamètre :</b> {rocket.diameter.meters} mètres
              </p>
              <p>
                <b>Masse :</b> {rocket.mass.kg.toLocaleString()} kg
              </p>
            </Card.Body>
            <Link key={rocket.id} to={`${rocket.id}`}>
              <Button variant="info" className="my-3 mx-3">
                Plus d'informations
              </Button>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Rockets;
