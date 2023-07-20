import axios from 'axios'

export const axiosConfig = () => {
    axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
    axios.defaults.headers.get.Accept = 'application/json';
    axios.defaults.headers.put['Content-Type'] = 'application/json';

    axios.interceptors.response.use(
        response => response,
        error => {
            console.log(`Error: ${error}`);
            return Promise.reject(error);
        }
    );
}