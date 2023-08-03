import axios from 'axios';

export const api = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}`,
    headers: {
        accept: 'accept: application/json',
    },
    withCredentials: true,
})

// api.interceptors.response.use(
//     (res) => res,
//     async (err) => {
//         const originalConfig = err.config;
//         if (err.response) {
//             if (err.response.status === 401 && !originalConfig._retry) {
//                 originalConfig._retry = true;
//                 try {
//                     const rs = await getToken();
//                     // login(rs.access, rs.refresh);
//                     return api(originalConfig);
//                 } catch (_error: any) {
//                     if (_error.response && _error.response) {
//                         return Promise.reject(_error.response);
//                     }
//                     return Promise.reject(_error);
//                 }
//             }
//         }
//     },
// );

// api.interceptors.request.use(
//     (config) => {
//     const accessToken = getAccessToken();
//     if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;
//         return config;
//     },
//     (err) => Promise.reject(err),
// );
