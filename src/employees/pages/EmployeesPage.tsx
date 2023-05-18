import {
    Button,
    IconChevronDown,
    IconUserPlus,
    IconWrench,
    Inline,
    InlineBanner,
    Page,
    Text
} from '@7shifts/sous-chef';
import EmployeesPageFilters from '../components/EmployeesPageFilters';
import EmployeesTable from '../components/EmployeesTable/EmployeesTable';

const EmployeesPage = () => {
    return (
        <Page
            title="Employees"
            actions={
                <Inline space={12}>
                    <Button>
                        <IconWrench size="medium" />
                        Add employee
                        <IconChevronDown />
                    </Button>
                    <Button theme="primary">
                        <IconUserPlus size="medium" />
                        Add employee
                    </Button>
                </Inline>
            }
            banner={
                <InlineBanner
                    title="Employees with invite required"
                    theme="warning"
                    primaryButton={<Button>See employees</Button>}
                >
                    You have employees that you need to invite to sign up into
                    the app.
                </InlineBanner>
            }
            filterBar={<EmployeesPageFilters />}
        >
            <EmployeesTable />
        </Page>
    );
};

export default EmployeesPage;
