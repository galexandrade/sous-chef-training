import { Button, Modal, ModalBody, ModalFooter } from '@7shifts/sous-chef';

type Props = {
    onClose: () => void;
};

const AddEmployeeModal = ({ onClose }: Props) => {
    return (
        <Modal header="Add employee" onClose={onClose}>
            <ModalBody>Form will go here</ModalBody>
            <ModalFooter
                actions={{
                    primary: <Button>Add employee</Button>,
                    secondary: <Button onClick={onClose}>Close</Button>
                }}
            />
        </Modal>
    );
};

export default AddEmployeeModal;
