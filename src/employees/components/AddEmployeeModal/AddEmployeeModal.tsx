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
        onSubmit: (values: FormValues, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            addEmployees(values)
                .then(() => {
                    resetForm({ values });
                    toast('Employee added');
                    onClose();
                })
                .catch(() => {
                    toast('Error on adding the employee', 'danger');
                })
                .finally(() => setSubmitting(false));
        }
    });
    return (
        <Modal
            header="Add employee"
            onClose={onClose}
            loading={formik.isSubmitting}
        >
            <Form stackContent={false} formik={formik}>
                <ModalBody>
                    <Stack>
                        <InlineBanner>
                            You can complete the employee information after
                            adding the new employee.
                        </InlineBanner>
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
                        secondary: <Button onClick={onClose}>Cancel</Button>
                    }}
                />
            </Form>
        </Modal>
    );
};

export default AddEmployeeModal;
