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
        <Modal header="Add employee" onClose={onClose}>
            <Form stackContent={false}>
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
                        primary: <Button type="submit">Add employee</Button>,
                        secondary: <Button onClick={onClose}>Close</Button>
                    }}
                />
            </Form>
        </Modal>
    );
};

export default AddEmployeeModal;
