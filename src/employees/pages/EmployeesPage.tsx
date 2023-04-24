import { Page } from '@7shifts/sous-chef';
import EmployeesTable from '../components/EmployeesTable';
import EmployeesPageActions from '../components/EmployeesPageActions/EmployeesPageActions';
import EmployeesPageFilters from '../components/EmployeesPageFilters/EmployeesPageFilters';

const EmployeesPage = () => {
    return (
        <Page
            title="View Employees"
            actions={<EmployeesPageActions />}
            filterBar={<EmployeesPageFilters />}
        >
            <EmployeesTable />
        </Page>
    );
};

export default EmployeesPage;
