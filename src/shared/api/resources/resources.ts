import { AxiosResponse } from 'axios';

import { api } from '../apiAxios';

export const resourcesPath = async (path: string): Promise<Blob> => {
    const response = await api.get<Blob, AxiosResponse<Blob>>(`/resources/${path}`, 
    {
        responseType: 'blob',
        headers: {
            'Content-Type': 'image/png'
        }
    });
    return response.data;
};
