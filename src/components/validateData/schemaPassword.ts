import * as yup from 'yup';

export const schema = yup.object({
    oldPassword: yup
        .string()
        .required('Обязательное поле')
        .min(8, 'Пароль не должен быть менее 8 символов')
        .max(15, 'Пароль не должен быть более 15 символов'),
    newPassword: yup
        .string()
        .required('Обязательное поле')
        .min(8, 'Пароль не должен быть менее 8 символов')
        .max(15, 'Пароль не должен быть более 15 символов'),
    confirmPassword: yup
        .string()
        .required('Обязательное поле')
        .oneOf([yup.ref('newPassword'), ''], 'Пароли не совпадают')
});

export type FormData = yup.InferType<typeof schema>;
