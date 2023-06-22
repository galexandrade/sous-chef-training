import {
    Button,
    DateField,
    Form,
    FormRow,
    InlineBanner,
    Modal,
    ModalBody,
    ModalFooter,
    Stack,
    TextField,
    toast
} from '@7shifts/sous-chef';
import { useFormik } from 'formik';
import schema, { FormValues } from './schema';
import { addEmployees } from '../../api';

type Props = {
    onClose: () => void;
};

const AddEmployeeModal = ({ onClose }: Props) => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            birthday: new Date()
        },
        validationSchema: schema,
        onSubmit: (formValues: FormValues, { setSubmitting }) => {
            setSubmitting(true);
            addEmployees(formValues)
                .then(() => {
                    toast('Employee created');
                    onClose();
                })
                .catch(() => {
                    toast('Error when creating employee', 'danger');
                })
                .finally(() => {
                    setSubmitting(false);
                });
        }
    });
    return (
        <Modal header="Add employee" onClose={onClose}>
            <Form stackContent={false} formik={formik}>
                <ModalBody>
                    <Stack>
                        <InlineBanner>
                            You can complete the employee information after
                            adding the employee.
                        </InlineBanner>
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
                    </Stack>
                </ModalBody>
                <ModalFooter
                    actions={{
                        primary: (
                            <Button
                                type="submit"
                                disabled={!formik.isValid || !formik.dirty}
                                loading={formik.isSubmitting}
                            >
                                Add employee
                            </Button>
                        ),
                        secondary: <Button onClick={onClose}>Close</Button>
                    }}
                />
            </Form>
        </Modal>
    );
};

export default AddEmployeeModal;
