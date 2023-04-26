import {
    Button,
    DateField,
    Form,
    FormFooter,
    FormRow,
    TextField,
    toast
} from '@7shifts/sous-chef';
import { Employee } from '../../types';
import { useFormik } from 'formik';
import schema, { FormValues } from './schema';
import { useNavigate } from 'react-router-dom';
import { editEmployee } from '../../api';

type Props = {
    employee: Employee;
};

const EditEmployeeForm = ({ employee }: Props) => {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            firstName: employee.firstName,
            lastName: employee.lastName,
            email: employee.email,
            birthday: new Date(employee.birthday)
        },
        validationSchema: schema,
        onSubmit: (values: FormValues, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            editEmployee(employee.id, values)
                .then(() => {
                    resetForm({ values });
                    toast('Employee edited');
                })
                .catch(() => {
                    toast('Error on editing the employee', 'danger');
                })
                .finally(() => setSubmitting(false));
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
                    primary: (
                        <Button
                            type="submit"
                            disabled={!formik.isValid || !formik.dirty}
                            loading={formik.isSubmitting}
                        >
                            Save
                        </Button>
                    ),
                    secondary: (
                        <Button onClick={() => navigate('..')}>Cancel</Button>
                    )
                }}
            />
        </Form>
    );
};

export default EditEmployeeForm;
