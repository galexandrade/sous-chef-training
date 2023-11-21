import { Page } from '@7shifts/sous-chef';
import EmployeesPageActions from '../components/EmployeesPageActions';
import EmployeesInviteBanner from '../components/EmployeesInviteBanner';
import EmployeesPageFilters from '../components/EmployeesPageFilters';
import EmployeesTable from '../components/EmployeesTable';

const EmployeesPage = () => {
    //This is for loading data into the page
    //const { isLoading, data, error, cursor } = useEmployees();
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
