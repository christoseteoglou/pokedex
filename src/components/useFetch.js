import { StyleSheet } from 'react-native'
import { useEffect, useState } from 'react'
import axios from 'axios'

const useFetch = (initUrl) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [url, setUrl] = useState(initUrl)

    /* useEffect(() => {
        setLoading(true);
        axios
        .get(url)
        .then((response) => {
            setData(response.data);
        })
        .catch((err) => {
            setError(err);
        })
        .finally(() => {
            setLoading(false)
        })
    }, [url])

    return {data, loading, error}; */

    useEffect(() => {
        const fetchData = async () => {
            setError(false)
            setLoading(true)

            try {
                const result = await axios.get(url)

                setData(result.data)
            } catch (error) {
                setError(true)
                console.log(error.message)
            }
            setLoading(false)
        }

        fetchData()
    }, [url])

    return [{ data, loading, error }]
}

export default useFetch

const styles = StyleSheet.create({})

// const {data, loading, error} = useFetch('url')