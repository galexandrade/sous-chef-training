import {
    Button,
    IconChevronDown,
    IconUserPlus,
    IconWrench,
    Inline
} from '@7shifts/sous-chef';

type Props = {};

const EmployeesPageActions = (props: Props) => {
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
