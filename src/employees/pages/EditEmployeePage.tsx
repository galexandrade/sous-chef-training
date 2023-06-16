import { Page } from '@7shifts/sous-chef';
import EditEmployeeForm from '../components/EditEmployeeForm';

type Props = {};

const EditEmployeePage = (props: Props) => {
    return (
        <Page title="Edit employee" breadcrumbs="Employees">
            <EditEmployeeForm />
        </Page>
    );
};

export default EditEmployeePage;
