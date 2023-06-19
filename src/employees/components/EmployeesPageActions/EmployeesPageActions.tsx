import {
    Button,
    IconChevronDown,
    IconUserPlus,
    IconWrench,
    Inline
} from '@7shifts/sous-chef';
import { useState } from 'react';
import AddEmployeeModal from '../AddEmployeeModal/AddEmployeeModal';

type Props = {};

const EmployeesPageActions = (props: Props) => {
    const [isAddEmployeeModalOpen, setIsAddEmployeeModalOpen] = useState(false);
    return (
        <>
            <Inline space={12}>
                <Button>
                    <IconWrench size="medium" />
                    Tools
                    <IconChevronDown size="medium" />
                </Button>
                <Button
                    theme="primary"
                    onClick={() => setIsAddEmployeeModalOpen(true)}
                >
                    <IconUserPlus size="medium" />
                    Add employee
                </Button>
            </Inline>
            {isAddEmployeeModalOpen && (
                <AddEmployeeModal
                    onClose={() => setIsAddEmployeeModalOpen(false)}
                />
            )}
        </>
    );
};

export default EmployeesPageActions;
