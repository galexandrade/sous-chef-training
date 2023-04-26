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
            <Form
                onSubmit={() => console.log('Will submit')}
                stackContent={false}
            >
                <ModalBody>
                    <Stack>
                        <InlineBanner>
                            You can complete the employee information after
                            adding the employee.
                        </InlineBanner>
                        <FormRow>
                            <TextField
                                name="firstName"
                                label="First name"
                                autoFocus
                            />
                            <TextField name="lastName" label="Last name" />
                        </FormRow>
                        <TextField name="email" label="Email" />
                        <FormRow columns={2}>
                            <DateField name="birthday" label="Birthday" />
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
