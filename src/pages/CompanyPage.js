import HttpClient from "../components/HttpClient";
import {useState} from "react";

function CompanyPage() {
    const [response, setResponse] = useState([]);
    const [error, setError] = useState(null);

    const responseCallBack = (data) => {
        setResponse(data);

    }

    const errorCallBack = (data) => {
        setError(data);
    }

    // if (response != null) {
        return (
            <>
                <HttpClient responseCallBack={responseCallBack} errorCallBack={errorCallBack} endpoint="company" />


                <script>

                </script>

                {/*<ul>*/}
                {/*    <li>{ response["headquarters"]["address"] }</li>*/}
                {/*    <li>{ response["headquarters"]["city"] }</li>*/}
                {/*    <li>{ response["links"]["website"] }</li>*/}
                {/*</ul>*/}
            </>
        )
    // }
}

export default CompanyPage