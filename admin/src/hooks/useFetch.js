import { useEffect, useState } from "react"
import axios from 'axios'
const useFetch = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        let response;
        const fetchData = async () => {
            setLoading(true)
            try {
                response = await axios.get(url, { withCredentials: true })
                setData(response.data)
            } catch (err) {
                setError(err)
            }
            setLoading(false)
        }

        fetchData()
    }, [url])

    const reFetch = async () => {
        setLoading(true)
        try {
            const response = await axios.get(url)
            setData(response.data)
        } catch (err) {
            setError(err)
        }
        setLoading(false)
    }
    return { data, loading, error, reFetch }
}

export default useFetch