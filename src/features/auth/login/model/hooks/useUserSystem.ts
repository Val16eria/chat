import { useEffect, useState } from 'react';
import { IAuthUser, authUser } from '../../../../../shared/api';

export const useUserSytem = (): IAuthUser => {

    const [user, setUser] = useState<IAuthUser>({} as IAuthUser);

    useEffect(() => {
        const handleUserSystem = async () => {
            try {
                const data = await authUser();
                setUser(data);
            }
            catch (e: any) {
                console.log(`Возникла ошибка: ${e}`);
            }
        }
        handleUserSystem();
    }, [])

    return user;
}