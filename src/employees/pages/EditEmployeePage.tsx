import { Page } from '@7shifts/sous-chef';
import EditEmployeeForm from '../components/EditEmployeeForm';

const EditEmployeePage = () => {
    //This is for loading data into the page
    //const { isLoading, data, error, cursor } = useEmployees();
    return (
        <Page title="Edit employee" breadcrumbs="Employees">
            <EditEmployeeForm />
        </Page>
    );
};

export default EditEmployeePage;
