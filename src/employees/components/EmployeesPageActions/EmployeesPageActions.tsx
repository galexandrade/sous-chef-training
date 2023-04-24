import {
    Button,
    IconChevronDown,
    IconUserPlus,
    IconWrench,
    Inline
} from '@7shifts/sous-chef';

const EmployeesPageActions = () => {
    return (
        <Inline space={12}>
            <Button>
                <IconWrench size="medium" />
                Tools
                <IconChevronDown size="medium" />
            </Button>
            <Button theme="primary">
                <IconUserPlus size="medium" />
                Add employee
            </Button>
        </Inline>
    );
};

export default EmployeesPageActions;
