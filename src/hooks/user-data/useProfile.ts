import { useEffect, useState } from 'react';
import { getUsers, USER_RESULT_TYPE } from '../../shared/api/auth';

export type TUser = {
    first_name: string;
    email: string;
    login: string
    second_name: string;
    phone: string;
    display_name?: string;
    avatar?: string;
    password: string;
}

const useProfile = (): [TUser, (value: string, name: keyof TUser) => void] => {
    const [homeUserInfo, setHomeUserInfo] = useState<TUser>({
        first_name: '',
        email: '',
        login: '',
        second_name: '',
        phone: '',
        display_name: '',
        avatar: '',
        password: ''
    });

    useEffect(() => {
        const handleUserInfo = async () => {
            const usersInfo = await getUsers();

            if (usersInfo.type === USER_RESULT_TYPE.SUCCESS) {
                setHomeUserInfo((prevState) => ({
                    ...prevState,
                    first_name: usersInfo.data.first_name,
                    email: usersInfo.data.email,
                    login: usersInfo.data.login,
                    second_name: usersInfo.data.second_name,
                    phone: usersInfo.data.phone,
                    display_name: usersInfo.data.display_name,
                    avatar: usersInfo.data.avatar,
                }))
            }

            if (usersInfo.type === USER_RESULT_TYPE.FAILURE) {
            }
        };

        handleUserInfo();
    }, []);

    const changeUserInfo = (value: string, name: keyof TUser) => {
      setHomeUserInfo((prevState) => ({
          ...prevState,
          [name]: value
      }))
    };

    return [homeUserInfo, changeUserInfo];
}

export default useProfile;
