import axios from 'axios'
import { useEffect, useContext, useState  } from 'react'
import ApiContext from '../utils/ApiContext';

const HttpClient = ({ endpoint }) => {
    const URL = process.env.REACT_APP_API_BASE_URL + endpoint
    const { setResponse, setError, refreshApi } = useContext(ApiContext);

    useEffect(() => {
        fetchData()
    // eslint-disable-next-line
    }, [refreshApi])

    const fetchData = async () => {
        try {
            // Send request
            await axios.get(URL).then(
                // On fulfilled
                (response) => {
                    // Send response to the parent
                    setResponse(response.data)
                },
                // On rejected
                (rejectionReason) => {
                    setError(rejectionReason.message)
                },
            )
        } catch (error) {
            // Handle error
            setError(error.message)
        }
    }
}

export default HttpClient
