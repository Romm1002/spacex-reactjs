import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import axios from "axios";
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import FormatDate from "../utils/FormatDate";

const History = () => {
    const [data, setData] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        fetchData(`https://api.spacexdata.com/v4/history/${id}`);
    }, []);

    const fetchData = async (url) => {
        try {
            const response = await axios.get(url);
            setData(response.data);
        } catch (error) {
            // gestion des erreurs
        }
    };

    let countArticle = 0;

    if (data.links) {
        Object.values(data.links).map((link) => {
            console.log(link);
        });
    }

    return (
        <>
            <Link to="/history">
                <div className="container ms-5 mt-5">
                    <Button variant="secondary">Retour</Button>
                </div>
            </Link>
            <div className="App-history">
                <h1 className="mt-5">{data.title}</h1>

                <h5 className="mt-5">{data.details}</h5>

                <p className="mt-5">{FormatDate(data.event_date_unix)}</p>

                {data.links &&
                    Object.values(data.links).map((link, id) => (
                        <div key={id} className="mt-5">
                            <p>
                                article {++countArticle} : <a href={link}>{link}</a>
                            </p>
                        </div>
                    ))}
            </div>
        </>
    );
};

export default History;
