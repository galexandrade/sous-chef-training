import { Page } from '@7shifts/sous-chef';
import EmployeesPageActions from '../components/EmployeesPageActions';

const EmployeesPage = () => {
    //This is for loading data into the page
    //const { isLoading, data, error, cursor } = useEmployees();
    return (
        <Page title="Employees" actions={<EmployeesPageActions />}>
            Page content here
        </Page>
    );
};

export default EmployeesPage;
