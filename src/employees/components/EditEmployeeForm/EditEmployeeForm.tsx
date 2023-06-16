import {
    Button,
    DateField,
    Form,
    FormFooter,
    FormRow,
    FormSection,
    TextField
} from '@7shifts/sous-chef';
import { useNavigate } from 'react-router-dom';
import { Employee } from '../../types';
import { useFormik } from 'formik';

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
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        }
    });

    return (
        <Form formik={formik}>
            <FormSection title="Personal information">
                <FormRow>
                    <TextField name="firstName" label="First Name" />
                    <TextField name="lastName" label="Last Name" />
                </FormRow>
                <TextField name="email" label="Email" />
                <FormRow columns={2}>
                    <DateField
                        name="birthday"
                        label="Birthday"
                        disabledDays={(day) => day > new Date()}
                    />
                </FormRow>
            </FormSection>
            <FormFooter
                actions={{
                    primary: <Button type="submit">Save</Button>,
                    secondary: (
                        <Button onClick={() => navigate('..')}>Cancel</Button>
                    )
                }}
            />
        </Form>
    );
};

export default EditEmployeeForm;
