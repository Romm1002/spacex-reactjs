import React, { useState, useEffect } from "react";
import CardHistory from "../components/CardHistory";
import { Row } from "react-bootstrap";
import HttpClient from "../components/HttpClient";
// Recupérer l'api

const ListHistory = () => {
  /** -------------- HTTP CLIENT -------------- **/
  const [error, setError] = useState(null);
  const [strResponse, setStrResponse] = useState(null);
  const [response, setResponse] = useState(null);

  // Convert strResponse to object
  useEffect(() => {
    setResponse(JSON.parse(strResponse));
  }, [strResponse]);

  /** -------------- HTTP CLIENT -------------- **/

  return (
    <>
      <HttpClient
        responseCallBack={setStrResponse}
        errorCallBack={setError}
        endpoint="history"
      />

      <div className="App-history mt-5">
        <h1>History of Space X</h1>

        <div></div>

        <div className="container mt-5">
          <Row>
            {response &&
              response.map((datum, id) => {
                return (
                  <>
                    <CardHistory key={id} history={datum} id={id} />
                  </>
                );
              })}
          </Row>
        </div>
      </div>
    </>
  );
};

export default ListHistory;
