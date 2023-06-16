import {
    Button,
    DateField,
    Form,
    FormFooter,
    FormRow,
    FormSection,
    IconTrash,
    Inline,
    TextField
} from '@7shifts/sous-chef';
import { useNavigate } from 'react-router-dom';
import { Employee } from '../../types';
import { useFormik } from 'formik';
import schema from './schema';

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
            birthday: new Date(employee.birthday),
            contacts: [
                {
                    firstName: 'First index',
                    email: 'email1'
                },
                {
                    firstName: 'Second index',
                    email: 'email 2'
                }
            ]
        },
        validationSchema: schema,
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
            <FormSection title="Contacts">
                <FormRow>
                    <TextField name="contacts[0].firstName" label="Name" />
                    <Inline flex={[1]} space={8}>
                        <TextField name="contacts[0].email" label="Email" />
                        <Button theme="link-icon" mt={24}>
                            <IconTrash />
                        </Button>
                    </Inline>
                </FormRow>
                <FormRow>
                    <TextField name="contacts[1].firstName" />
                    <Inline flex={[1]} space={8}>
                        <TextField name="contacts[1].email" />
                        <Button theme="link-icon">
                            <IconTrash />
                        </Button>
                    </Inline>
                </FormRow>
                <Button theme="link-primary">Add contact</Button>
            </FormSection>
            <FormFooter
                actions={{
                    primary: (
                        <Button
                            type="submit"
                            disabled={!formik.isValid || !formik.dirty}
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