import axios from 'axios'
import { useEffect } from 'react'

const HttpClient = ({ responseCallBack, errorCallBack, endpoint }) => {
    const URL = process.env.REACT_APP_API_BASE_URL + endpoint

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            // Send request
            console.log("Send http request to '" + endpoint + "' endpoint")
            await axios.get(URL).then(
                // On fulfilled
                (response) => {
                    console.log('Received response from SpaceX api')
                    console.log('Response : ' + JSON.stringify(response.data, null, 4))

                    // Send response to the parent
                    responseCallBack(JSON.stringify(response.data))
                },
                // On rejected
                (rejectionReason) => {
                    console.log(rejectionReason.message)
                    errorCallBack(rejectionReason.message);
                }
            );
        } catch (error) {
            // Handle error
            errorCallBack(error.message);
        }
    }
}

export default HttpClient
