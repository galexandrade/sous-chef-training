import {
    Button,
    IconChevronDown,
    IconUserPlus,
    IconWrench,
    Inline
} from '@7shifts/sous-chef';
import AddEmployeeModal from '../AddEmployeeModal/AddEmployeeModal';
import { useState } from 'react';

const EmployeesPageActions = () => {
    const [isAddEmployeeModalOpen, setIsAddEmployeeModalOpen] = useState(false);
    const toggleAddEmployeeModal = () =>
        setIsAddEmployeeModalOpen(!isAddEmployeeModalOpen);
    return (
        <>
            <Inline space={12}>
                <Button>
                    <IconWrench size="medium" />
                    Tools
                    <IconChevronDown size="medium" />
                </Button>
                <Button theme="primary" onClick={toggleAddEmployeeModal}>
                    <IconUserPlus size="medium" />
                    Add employee
                </Button>
            </Inline>
            {isAddEmployeeModalOpen && (
                <AddEmployeeModal onClose={toggleAddEmployeeModal} />
            )}
        </>
    );
};

export default EmployeesPageActions;
