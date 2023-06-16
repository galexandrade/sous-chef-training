import {
    Button,
    Form,
    FormFooter,
    FormRow,
    FormSection,
    TextField
} from '@7shifts/sous-chef';
import { useNavigate } from 'react-router-dom';

type Props = {};

const EditEmployeeForm = (props: Props) => {
    const navigate = useNavigate();
    return (
        <Form onSubmit={(formData) => console.log(formData)}>
            <FormSection title="Personal information">
                <FormRow>
                    <TextField name="firstName" label="First Name" />
                    <TextField name="lastName" label="Last Name" />
                </FormRow>
                <TextField name="email" label="Email" />
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
