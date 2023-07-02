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
    display_name: yup
        .string(),
    phone: yup
        .string()
        .required('Обязательное поле'),
});

export type FormData = yup.InferType<typeof schema>;
