export interface IUser {
    first_name: string;
    second_name: string;
    dispay_name?: string;
    login: string;
    email: string;
    phone: string;
}

export interface IPassword {
    oldPassword: string;
    newPassword: string;
}