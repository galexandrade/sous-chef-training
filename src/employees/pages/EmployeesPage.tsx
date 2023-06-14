import { Page } from '@7shifts/sous-chef';
import EmployeesPageActions from '../components/EmployeesPageActions/EmployeesPageActions';
import EmployeesInviteBanner from '../components/EmployeesInviteBanner/EmployeesInviteBanner';
import EmployeesPageFilters from '../components/EmployeesPageFilters/EmployeesPageFilters';
import EmployeesTable from '../components/EmployeesTable/EmployeesTable';

const EmployeesPage = () => {
    //This is for loading data into the page
    return (
        <Page
            title="Employees"
            actions={<EmployeesPageActions />}
            banner={<EmployeesInviteBanner />}
            filterBar={<EmployeesPageFilters />}
        >
            <EmployeesTable />
        </Page>
    );
};

export default EmployeesPage;
