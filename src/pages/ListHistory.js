import React, { useState, useEffect } from "react";
import axios from "axios";
import CardHistory from "../components/CardHistory";
import { Row } from "react-bootstrap";
// Recupérer l'api

const ListHistory = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData("https://api.spacexdata.com/v4/history");
  }, []);

  const fetchData = async (url) => {
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      // gestion des erreurs
    }
  };

  console.log(data);

  return (
    <>
      <div className="App-history mt-5">
        <h1>History of Space X</h1>

        <div></div>

        <div className="container mt-5">
          <Row>
            {data.map((datum) => {
              return <CardHistory history={datum} />;
            })}
          </Row>
        </div>
      </div>
    </>
  );
};

export default ListHistory;
