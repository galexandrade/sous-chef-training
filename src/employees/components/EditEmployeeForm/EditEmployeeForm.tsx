import {
    Button,
    DateField,
    Form,
    FormFooter,
    FormRow,
    TextField
} from '@7shifts/sous-chef';
import { useNavigate } from 'react-router-dom';

const EditEmployeeForm = () => {
    const navigate = useNavigate();
    return (
        <Form>
            <FormRow>
                <TextField name="firstName" label="First name" />
                <TextField name="lastName" label="Last name" />
            </FormRow>
            <TextField name="email" label="Email" />
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
