import axios from 'axios';
import { storageRemoveItem, storageGetItem } from '../helper';

const api = axios.create({
    baseURL: 'https://teste.pushstart.com.br/api',
    headers: {
        'Content-Type': 'application/json'
    }
})

api.interceptors.response.use(
    (res) => {
        return res;
    },
    (error) => {
        if (error.response.status === 401) {
            storageRemoveItem();
            window.location.href = '/';
        }
    },
);

api.interceptors.request.use(async (req) => {
    const token = storageGetItem();

    if (token) {
        req.headers.Authorization = `Bearer ${token}`;
    }

    return req;
});

export default api;