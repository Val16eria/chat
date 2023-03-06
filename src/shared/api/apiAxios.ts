import axios, { AxiosError, AxiosResponse } from "axios";

export interface IUser {
    firstName: string;
    secondName: string;
    login: string;
    email: string;
    password: string;
    phone: string;
}


const URL_SIGN_UP = 'https://ya-praktikum.tech/api/v2/auth/signup';
const URL_SIGN_IN = 'https://ya-praktikum.tech/api/v2/auth/signin';
const URL_USER_INFO = 'https://ya-praktikum.tech/api/v2/auth/user';
//const URL_LOGOUT = 'https://ya-praktikum.tech/api/v2/auth/logout';


// РЕГИСТРАЦИЯ
export const postSignUp = (props: {
    password: string | undefined;
    phone: string;
    second_name: string | undefined;
    login: string | undefined;
    first_name: string | undefined;
    email: string | undefined
}) => {
    axios.post<IUser[]>(URL_SIGN_UP, props)
        .then(response => {
            console.log(response);
            console.log(response.status);
        })
        .catch(error => {
            console.error(error)
        });
}

type TResponse<T> = {
    status: 'rejected' | 'success',
    data: string | T,
}

// ЛОГИН
export const postSignIn = async (props: {
    login: string | undefined;
    password: string | undefined;
}): Promise<TResponse<IUser[]>> => {
    try {
     const { data } = await axios.post<AxiosResponse<IUser[]>>(URL_SIGN_IN, props);

     return {
         status: 'success',
         data: data.data,
     };
    } catch (error: unknown) {
        const axiosError = error as AxiosError<unknown>;
        console.log('error', axiosError);
        return {
            status: 'rejected',
            data: 'error'
        };
    }
}


// ИНФОРМАЦИЯ О ЮЗЕРЕ

export const getUsers = async (): Promise<TResponse<IUser[]>> => {
    try {
        const { data } = await axios.get<AxiosResponse<IUser[]>>(URL_USER_INFO);

        return {
            status: 'success',
            data: data.data,
        };
    } catch (error: unknown) {
        const axiosError = error as AxiosError<unknown>;
        console.log('error', axiosError);
        return {
            status: 'rejected',
            data: 'error'
        };
    }
}



    // axios.get(URL_USER_INFO)
    //     .then(response => {
    //     console.log("Это дата инфо о юзере", response.data)
    // })
    //     .catch(error => {
    //     console.log("Это ошибка инфо о юзере", error)
    // });
//}
