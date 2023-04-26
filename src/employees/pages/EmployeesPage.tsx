import { Page } from '@7shifts/sous-chef';
import EmployeesTable from '../components/EmployeesTable';
import EmployeesPageActions from '../components/EmployeesPageActions/EmployeesPageActions';
import EmployeesPageFilters from '../components/EmployeesPageFilters/EmployeesPageFilters';
import EmployeesInviteBanner from '../components/EmployeesInviteBanner/EmployeesInviteBanner';

const EmployeesPage = () => {
    return (
        <Page
            title="View Employees"
            actions={<EmployeesPageActions />}
            filterBar={<EmployeesPageFilters />}
            banner={<EmployeesInviteBanner />}
        >
            <EmployeesTable />
        </Page>
    );
};

export default EmployeesPage;
