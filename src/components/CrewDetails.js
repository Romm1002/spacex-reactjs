import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import HttpClient from "./HttpClient";

const CrewMemberPage = () => {
  const { id } = useParams();

  /** -------------- HTTP CLIENT -------------- **/
  // eslint-disable-next-line
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
        endpoint={`crew/${id}`}
      />
      {response ? (
        <div>
          <Link to="/">
            <Button variant="secondary" className="my-3">
              Back
            </Button>
          </Link>
          <div className="w-100 d-flex justify-content-center align-items-center">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={response.image}
                alt={response.name}
              />
              <Card.Body>
                <Card.Title>{response.name}</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>
                  <b>Agency :</b> {response.agency}
                </ListGroup.Item>
                <ListGroup.Item>
                  <b>Status :</b> {response.status === "active" ? "Actif" : ""}
                </ListGroup.Item>
                <ListGroup.Item>
                  <b>Wikipedia :</b> <a href={response.wikipedia}>Go to</a>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </div>
        </div>
      ) : (
        <div>The member does't exist</div>
      )}
    </>
  );
};

export default CrewMemberPage;
