import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://ya-praktikum.tech/api/v2',
    withCredentials: true,
})
