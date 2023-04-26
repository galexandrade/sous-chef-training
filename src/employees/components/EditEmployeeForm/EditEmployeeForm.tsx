import {
    Button,
    DateField,
    Form,
    FormFooter,
    FormRow,
    TextField
} from '@7shifts/sous-chef';
import { Employee } from '../../types';
import { useFormik } from 'formik';
import schema, { FormValues } from './schema';

type Props = {
    employee: Employee;
};

const EditEmployeeForm = ({ employee }: Props) => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            birthday: null
        },
        validationSchema: schema,
        onSubmit: (values: FormValues, { setSubmitting }) => {
            console.log('Will submit values', values);
            setSubmitting(true);
        }
    });

    return (
        <Form formik={formik}>
            <FormRow>
                <TextField name="firstName" label="First name" autoFocus />
                <TextField name="lastName" label="Last name" />
            </FormRow>
            <TextField name="email" label="Email" />
            <FormRow columns={2}>
                <DateField
                    name="birthday"
                    label="Birthday"
                    disabledDays={(day) => day > new Date()}
                />
            </FormRow>
            <FormFooter
                actions={{
                    primary: <Button type="submit">Save</Button>,
                    secondary: <Button>Cancel</Button>
                }}
            />
        </Form>
    );
};

export default EditEmployeeForm;
