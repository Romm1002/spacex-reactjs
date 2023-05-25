import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CrewSearch from "./CrewSearch";

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
      <h1>Les astronautes de SpaceX</h1>
      <div className="row justify-content-around">
      <CrewSearch onSearch={handleSearch} />
        {filteredCrew.map((member) => (
          <Link
            key={member.id}
            to={`member/${member.id}`}
            className="card bg-light mb-4"
            style={{ width: "18rem", padding: "0", height: "auto" }}
          >
            <img
              src={member.image}
              className="card-img-top"
              alt={member.name}
              style={{ objectFit: "cover", height: "350px" }}
            />
            <div className="card-body">
              <h5 className="card-title">{member.name}</h5>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CrewComponent;
