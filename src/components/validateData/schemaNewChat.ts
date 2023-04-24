import * as yup from 'yup';

export const schema = yup.object().shape({
    title: yup
        .string()
        .max(15, 'Название не должно быть более 30 символов')
        .required('Обязательное поле')
})

export type FormData = yup.InferType<typeof schema>;
