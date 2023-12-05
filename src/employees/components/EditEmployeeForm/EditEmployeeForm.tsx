import {
    Button,
    DateField,
    Form,
    FormFooter,
    FormRow,
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
        <Form>
            <FormRow>
                <TextField
                    name="firstName"
                    label="First name"
                    defaultValue={employee.firstName}
                />
                <TextField
                    name="lastName"
                    label="Last name"
                    defaultValue={employee.lastName}
                />
            </FormRow>
            <TextField
                name="email"
                label="Email"
                defaultValue={employee.email}
            />
            <FormRow columns={2}>
                <DateField name="birthday" label="Birthday" />
            </FormRow>
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
