import { DataTable, Page, Text } from '@7shifts/sous-chef';
import { useEmployees } from '../hooks/useEmployees';

const EmployeesPage = () => {
    //This is for loading data into the page
    const { isLoading, data, error, cursor } = useEmployees();

    return (
        <Page title="View Employees">
            <DataTable items={data} isLoading={isLoading} />
        </Page>
    );
};

export default EmployeesPage;
