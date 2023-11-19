import axios, { AxiosInstance, AxiosRequestConfig, CancelTokenSource } from 'axios'
import { useState, useEffect } from 'react';

interface AxiosProps {
    instance: AxiosInstance,
    url: string,
    method?: 'get' | 'post' | 'put' | 'delete',
    config?: AxiosRequestConfig,
    data?: any
}
/**
 * useAxiosFunction is a custom hook that allows you to fetch data from an API and handle errors automatically.
 * @returns data type of T that holds the fetched data.
error is a string or null that holds any error message.
loading is a boolean that indicates whether the data is currently being fetched.
 */
const useAxiosFunction = <T extends {}>(): [T, string | null, boolean, (config: AxiosProps) => void] => {
    const [data, setData] = useState<T>(null!)
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [cancelToken, setCancelToken] = useState<CancelTokenSource | null>(null)

    /**
     * axiosFetch is a function that takes a configuration object and performs an asynchronous HTTP request using Axios. 
     * It updates the data, error, and loading states accordingly.
     * @param config AxiosProps
     * @example const config = {
     *  instance: YOUR-AXIOS-INSTANCE,
     *  method: 'post',
     *  url: '/EXAMPLE',
     *  data: {
     *      name: 'EXAMPLE',
        }
     * @default method: 'get'
     */
    const axiosFetch = async (config: AxiosProps) => {
        const { instance ,method, url, data, config: reqConf } = config
        let source = axios.CancelToken.source()
        setLoading(true)
        setCancelToken(source)
        try {
            await instance[method ?? 'get'](url,{...data},{
                ...reqConf,
                cancelToken: source.token
            }).then((response) => {
                setData(response.data)
            }).catch((error) => {
                setError(`${error}`)
            }).finally(() => {
                setLoading(false)
            })
        } catch (error) {
            setError(`${error}`)
        }
    }

    useEffect(() => {
        return () => cancelToken?.cancel('Request Canceled!')
    }, [cancelToken])

    return [data, error, loading, axiosFetch]
}

export default useAxiosFunction