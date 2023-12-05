import {
    Button,
    DateField,
    Form,
    FormFooter,
    FormRow,
    FormSection,
    IconTrash,
    Inline,
    Stack,
    TextField
} from '@7shifts/sous-chef';
import { useNavigate } from 'react-router-dom';
import { Employee } from '../../types';
import { FieldArray, FormikProvider, useFormik } from 'formik';
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
                { firstName: employee.firstName, lastName: employee.lastName }
            ]
        },
        validationSchema: schema,
        onSubmit: (values) => console.log('submit', values)
    });
    return (
        <FormikProvider value={formik}>
            <Form formik={formik}>
                <FormSection title="Personal information">
                    <FormRow>
                        <TextField name="firstName" label="First name" />
                        <TextField name="lastName" label="Last name" />
                    </FormRow>
                    <TextField name="email" label="Email" />
                    <FormRow columns={2}>
                        <DateField
                            name="birthday"
                            label="Birthday"
                            disabledDays={(date) => date > new Date()}
                        />
                    </FormRow>
                </FormSection>
                <FormSection title="Contacts">
                    <FieldArray
                        name="contacts"
                        render={({ push, remove }) => (
                            <Stack>
                                {formik.values.contacts.map((_, index) => (
                                    <FormRow key={index}>
                                        <TextField
                                            name={`contacts[${index}].name`}
                                            label={index === 0 && 'Name'}
                                        />
                                        <Inline flex={[1]} space={8}>
                                            <TextField
                                                name={`contacts[${index}].email`}
                                                label={index === 0 && 'Email'}
                                            />
                                            <Button
                                                theme="link-icon"
                                                mt={index === 0 && 24}
                                                onClick={() => remove(index)}
                                            >
                                                <IconTrash />
                                            </Button>
                                        </Inline>
                                    </FormRow>
                                ))}
                                <Button
                                    theme="link-primary"
                                    onClick={() =>
                                        push({ name: '', email: '' })
                                    }
                                >
                                    Add contact
                                </Button>
                            </Stack>
                        )}
                    />
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
                            <Button onClick={() => navigate('..')}>
                                Cancel
                            </Button>
                        )
                    }}
                />
            </Form>
        </FormikProvider>
    );
};

export default EditEmployeeForm;
