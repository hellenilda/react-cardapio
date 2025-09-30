import axios from 'axios'
import { useMutation, useQueryClient } from '@tanstack/react-query'

const API_URL = '/api'

const postData = async (data) => {
    const response = await axios.post(API_URL + '/food', data)
    return response.data
}

const updateData = async ({ id, data }) => {
    const response = await axios.put(API_URL + `/food/${id}`, data)
    return response.data
}

export function useFoodDataMutate() {
    const queryClient = useQueryClient()
    
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['food-data'])
        }
    })

    return mutate
}

export function useFoodDataUpdate() {
    const queryClient = useQueryClient()
    
    const mutate = useMutation({
        mutationFn: updateData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['food-data'])
        }
    })

    return mutate
}