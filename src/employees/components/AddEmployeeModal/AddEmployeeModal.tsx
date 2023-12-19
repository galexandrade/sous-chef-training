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
    TextField
} from '@7shifts/sous-chef';

type Props = {
    onClose: () => void;
};

const AddEmployeeModal = ({ onClose }: Props) => {
    return (
        <Modal header="Add employee" onClose={onClose} loading>
            <Form>
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
                        primary: <Button type="submit">Add employee</Button>,
                        secondary: <Button onClick={onClose}>Cancel</Button>
                    }}
                />
            </Form>
        </Modal>
    );
};

export default AddEmployeeModal;
