import { Page } from '@7shifts/sous-chef';
import EmployeesTable from '../components/EmployeesTable';

const EmployeesPage = () => {
    return (
        <Page title="View Employees">
            <EmployeesTable />
        </Page>
    );
};

export default EmployeesPage;
