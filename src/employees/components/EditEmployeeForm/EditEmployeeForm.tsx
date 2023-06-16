import {
    Button,
    Form,
    FormFooter,
    FormRow,
    FormSection,
    TextField
} from '@7shifts/sous-chef';
import { useNavigate } from 'react-router-dom';
import { Employee } from '../../types';

type Props = {
    employee: Employee;
};

const EditEmployeeForm = ({ employee }: Props) => {
    const navigate = useNavigate();
    return (
        <Form onSubmit={(formData) => console.log(formData)}>
            <FormSection title="Personal information">
                <FormRow>
                    <TextField
                        name="firstName"
                        label="First Name"
                        defaultValue={employee.firstName}
                    />
                    <TextField
                        name="lastName"
                        label="Last Name"
                        defaultValue={employee.lastName}
                    />
                </FormRow>
                <TextField
                    name="email"
                    label="Email"
                    defaultValue={employee.email}
                />
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
