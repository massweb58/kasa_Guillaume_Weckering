import { useState, useEffect } from "react";

export function useFetch(url) {
    const [fetchedData, setFetchData] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!url) {
            return
        }

        setLoading(true);

        async function fetchData() {
            try {
                let response = await fetch(url)
                let data = await response.json()
                setFetchData(data)
            } catch (err) {
                console.log(err)
                setError(true)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [url])
    return {fetchedData, error};
}