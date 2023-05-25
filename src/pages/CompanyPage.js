import HttpClient from "../components/HttpClient";
import { useEffect, useState } from "react";

function CompanyPage() {
  /** -------------- HTTP CLIENT -------------- **/
  const [error, setError] = useState(null);
  const [strResponse, setStrResponse] = useState(null);
  const [response, setResponse] = useState(null);

  // Convert strResponse to object
  useEffect(() => {
    setResponse(JSON.parse(strResponse));
  }, strResponse);

  /** -------------- HTTP CLIENT -------------- **/

  return (
    <>
      <HttpClient
        responseCallBack={setStrResponse}
        errorCallBack={setError}
        endpoint="company"
      />

      <p>{response != null ? response.name : null}</p>
    </>
  );
}

export default CompanyPage;
