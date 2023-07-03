import * as yup from 'yup';

export const schema = yup.object({
    email: yup
        .string()
        .email('Неправильный формат ввода')
        .required('Обязательное поле'),
    login: yup
        .string()
        .required('Обязательное поле'),
    first_name: yup
        .string()
        .required('Обязательное поле'),
    second_name: yup
        .string()
        .required('Обязательное поле'),
    phone: yup
        .string()
        .required('Обязательное поле'),
    password: yup
        .string()
        .required('Обязательное поле')
        .min(8, 'Пароль не должен быть менее 8 символов')
        .max(15, 'Пароль не должен быть более 15 символов'),
    confirmPassword: yup
        .string()
        .required('Обязательное поле')
        .oneOf([yup.ref('password'), ''], 'Пароли не совпадают')
});

export type FormData = yup.InferType<typeof schema>;
