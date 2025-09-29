import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

const API_URL = '/api'

const fetchData = async() => {
    const response = await axios.get(API_URL + '/food')
    return response
}

export function useFoodData() {
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['food-data'],
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data
    }
}