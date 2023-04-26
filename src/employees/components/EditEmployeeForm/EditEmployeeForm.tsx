import { Form, TextField } from '@7shifts/sous-chef';
import { Employee } from '../../types';

type Props = {
    employee: Employee;
};

const EditEmployeeForm = ({ employee }: Props) => {
    return (
        <Form>
            <TextField name="firstName" label="First name" />
        </Form>
    );
};

export default EditEmployeeForm;
