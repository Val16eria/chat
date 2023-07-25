import { useEffect } from 'react';
import { IAuthUser } from '../../../../shared/api';
import { useAppDispatch, useAppSelector } from '../../../../shared/hooks';
import { selectAuthUser } from '../../../auth/auth/lib';
import { authUserThunk } from '../../../auth/auth/model';

export const useUserSytem = (): IAuthUser => {

    const user = useAppSelector(selectAuthUser);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const handleUserSystem = async () => {
            try {
                await dispatch(authUserThunk());
            }
            catch (e: any) {
                console.log(`Возникла ошибка: ${e}`);
            }
        }
        handleUserSystem();
    }, [])

    return user as IAuthUser;
}