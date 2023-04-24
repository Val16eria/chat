import * as yup from 'yup';

export const schema = yup.object({
    login: yup
        .string()
        .required('Обязательное поле'),
    password: yup
        .string()
        .required('Обязательное поле')
        .min(8, 'Пароль не должен быть менее 8 символов')
        .max(15, 'Пароль не должен быть более 15 символов')
});

export type FormData = yup.InferType<typeof schema>;
