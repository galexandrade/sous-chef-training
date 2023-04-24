import { Page } from '@7shifts/sous-chef';
import EmployeesTable from '../components/EmployeesTable';
import EmployeesPageActions from '../components/EmployeesPageActions/EmployeesPageActions';

const EmployeesPage = () => {
    return (
        <Page title="View Employees" actions={<EmployeesPageActions />}>
            <EmployeesTable />
        </Page>
    );
};

export default EmployeesPage;
