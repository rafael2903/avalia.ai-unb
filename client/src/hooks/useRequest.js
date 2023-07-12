import { useEffect, useState } from 'react'
import api from 'services/api'

export const useRequest = (options, body) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            try {
                const res = await api({ data: body, ...options })
                setData(res.data)
            } catch (error) {
                setError(error)
            } finally {
                setIsLoading(false)
            }
        }
        if (
            (options.method !== 'post' && options.method !== 'put') ||
            body !== undefined
        )
            fetchData()
    }, [body])

    return { data, error, isLoading }
}

export const useGet = (url, ...options) => {
    return useRequest({ method: 'get', url, ...options })
}

export const usePost = (url, ...options) => {
    return useRequest({ method: 'post', url, ...options })
}

export const usePut = (url, ...options) => {
    return useRequest({ method: 'put', url, ...options })
}

export const useDelete = (url, ...options) => {
    return useRequest({ method: 'delete', url, ...options })
}
