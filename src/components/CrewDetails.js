import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const CrewMemberPage = () => {
  const { id } = useParams();
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

  const { name, agency, image, status, wikipedia } = memberData;

  return (
    <div>
      <h1>{name}</h1>
      <p>Agency: {agency}</p>
      <img src={image} alt={name} style={{ width: "200px" }} />
      <p>Status: {status}</p>
      <p>
        Page wiki : <a href={wikipedia}>{wikipedia}</a>
      </p>
    </div>
  );
};

export default CrewMemberPage;
