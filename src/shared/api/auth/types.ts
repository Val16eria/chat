export interface IAuthSignUp extends IAuthSignIn {
    first_name: string;
    second_name: string;
    email: string;
    phone: string;
}

export interface IAuthSignIn {
    login: string;
    password: string;
}

export interface IAuthUser {
    id: number;
    first_name: string;
    second_name: string;
    display_name: string;
    login: string;
    email: string;
    phone: string;    
    avatar: string;
}
