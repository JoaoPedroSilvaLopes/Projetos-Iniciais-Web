import {useState, useEffect} from 'react'

// AULA 04 - CUSTOM HOOK
export const useFetch = (url) => {
    const [data, setData] = useState(null)

    // AULA 05 - REFATORANDO O POST
    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(false)
    
    const httpConfig = (data, method) => {
        if (method === "POST") {
            setConfig({
                method,
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(data)
            })
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(url)
            const json = await res.json()
            setData(json)
        }
        fetchData()
    }, [url, callFetch])

    // AULA 05 - REFATORANDO O POST

    useEffect(() => {
        const httpsRequest = async () => {
            if (method === "POST") {
                let fetchOptions = [url, config]
    
                const res = await fetch(...fetchOptions)
                const json = await res.json()
    
                setCallFetch(json)
            }
        }
        httpsRequest()
    }), [config]

    return { data, httpConfig }
}