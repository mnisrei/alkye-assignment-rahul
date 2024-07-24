import axios from 'axios';
const baseURL = import.meta.env.VITE_API_BASE_URL;

const axiosClient = axios.create({
    baseURL,
    headers: {
        // 'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});

axiosClient.interceptors.request.use((config) => {
    const token = sessionStorage.getItem('token') || '';
    if (token) {
        config.headers.Authorization = `Token ${token}`;
    }
    return config;
});

export function getRequest(
    URL,
    config
) {
    return axiosClient.get(`${URL}`, config);
}

export function postRequest(
    URL,
    payload,
    config
) {
    return axiosClient.post(`${URL}`, payload, config);
}

export function patchRequest(
    URL,
    payload,
    config
) {
    return axiosClient.patch(`${URL}`, payload, config);
}

export function deleteRequest(
    URL,
    config
) {
    return axiosClient.delete(`${URL}`, config);
}

export default axiosClient;
