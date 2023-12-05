import * as yup from 'yup';

const schema = yup.object({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    birthday: yup
        .date()
        .max(new Date(), "Birthday can't be in the future")
        .required('Birthday is required'),
    contacts: yup.array().of(
        yup.object({
            name: yup.string().required('First name is required'),
            email: yup
                .string()
                .email('Invalid email')
                .required('Email is required')
        })
    )
});

export type FormValues = yup.InferType<typeof schema>;

export default schema;
