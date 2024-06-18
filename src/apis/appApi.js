import axios from 'axios'
import { AUTH_STORAGE_KEY } from '../constants'

const getAuthorization = () => `Bearer ${localStorage.getItem(AUTH_STORAGE_KEY)}`

const appApi = axios.create({
    baseURL: `${import.meta.env.VITE_BASE_URL}/api/v1`,
    headers: {'Authorization': getAuthorization()}
})


export {
    appApi
}