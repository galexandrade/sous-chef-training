import {
    Button,
    DateField,
    Form,
    FormFooter,
    FormRow,
    FormSection,
    TextField,
    toast
} from '@7shifts/sous-chef';
import { Employee } from '../../types';
import { useFormik } from 'formik';
import schema from './schema';
import { editEmployee } from '../../api';

type Props = {
    employee: Employee;
};

const EditEmployeeForm = ({ employee }: Props) => {
    const formik = useFormik({
        initialValues: {
            firstName: employee.firstName,
            lastName: employee.lastName,
            email: employee.email,
            birthday: employee.birthday
        },
        validationSchema: schema,
        onSubmit: (formValues, { setSubmitting }) => {
            setSubmitting(true);
            editEmployee(employee.id, formValues)
                .then(() => {
                    toast('Employee edited!');
                })
                .catch(() => {
                    toast('Oh no! Some error happened', 'danger');
                })
                .finally(() => setSubmitting(false));
        }
    });

    console.log(employee);
    return (
        <Form formik={formik}>
            <FormSection title="Personal information">
                <FormRow>
                    <TextField name="firstName" label="First name" />
                    <TextField name="lastName" label="Last name" />
                </FormRow>
                <TextField name="email" label="Email" />
            </FormSection>
            <FormRow columns={2}>
                <DateField name="birthday" label="Birthday" />
            </FormRow>
            <FormFooter
                actions={{
                    primary: (
                        <Button
                            disabled={!formik.isValid || !formik.dirty}
                            type="submit"
                            loading={formik.isSubmitting}
                        >
                            Save
                        </Button>
                    ),
                    secondary: <Button>Cancel</Button>
                }}
            />
        </Form>
    );
};

export default EditEmployeeForm;
