import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CrewSearch from "./CrewSearch";
import Card from "react-bootstrap/Card";

const CrewComponent = () => {
  const apiUrl = "https://api.spacexdata.com/v4/crew";
  const [crewData, setCrewData] = useState([]);
  const [filteredCrew, setFilteredCrew] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setCrewData(response.data);
        setFilteredCrew(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (searchTerm) => {
    const filteredResults = crewData.filter((member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCrew(filteredResults);
  };

  return (
    <div>
      <div className="d-flex align-items-center justify-content-between my-4">
        <h1>Les astronautes de SpaceX</h1>
        <CrewSearch onSearch={handleSearch} />
      </div>
      <div className="row justify-content-around">
        {filteredCrew.map((member) => (
          <Link
            key={member.id}
            to={`member/${member.id}`}
            className="card bg-light mb-4"
            style={{
              width: "18rem",
              padding: "0",
              height: "auto",
              textDecoration: "none",
            }}
          >
            <Card.Img
              src={member.image}
              variant="top"
              alt={member.name}
              style={{ objectFit: "cover", height: "350px" }}
            />
            <Card.Body>
              <Card.Title>{member.name}</Card.Title>
            </Card.Body>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CrewComponent;
