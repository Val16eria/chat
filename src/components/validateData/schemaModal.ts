import * as yup from 'yup';

export const schema = yup.object().shape({
    users: yup
        .number()
        .required('Обязательное поле')
})

export type FormData = yup.InferType<typeof schema>;
