import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import FormatDate from "../utils/FormatDate";
import HttpClient from "../components/HttpClient";

const History = () => {
  const { id } = useParams();
  /** -------------- HTTP CLIENT -------------- **/
  const [error, setError] = useState(null);
  const [strResponse, setStrResponse] = useState(null);
  const [response, setResponse] = useState(null);

  // Convert strResponse to object
  useEffect(() => {
    setResponse(JSON.parse(strResponse));
  }, [strResponse]);

  /** -------------- HTTP CLIENT -------------- **/

  let countArticle = 0;

  return (

    <>
      <HttpClient
        responseCallBack={setStrResponse}
        errorCallBack={setError}
        endpoint={`history/${id}`}
      />
      
      {response && (
        <>
          <Link to="/history">
            <div className="container ms-5 mt-5">
              <Button variant="secondary">Retour</Button>
            </div>
          </Link>
          <div className="App-history">
            <h1 className="mt-5">{response.title}</h1>

            <h5 className="mt-5">{response.details}</h5>

            <p className="mt-5">{FormatDate(response.event_date_unix)}</p>

            {response.links &&
              Object.values(response.links).map((link, id) => (
                <div key={id} className="mt-5">
                  <p>
                    article {++countArticle} : <a href={link}>{link}</a>
                  </p>
                </div>
              ))}
          </div>
        </>
      )}
    </>
  );
};

export default History;
