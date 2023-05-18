import { Page, Spinner, Text } from '@7shifts/sous-chef';
import EditEmployeeForm from '../components/EditEmployeeForm/EditEmployeeForm';
import { useParams } from 'react-router-dom';
import { useEmployee } from '../hooks/useEmployee';

type Props = {};

const EditEmployeePage = (props: Props) => {
    const { id } = useParams();
    const { employee, isLoading, error } = useEmployee(id);
    return (
        <Page title="Edit employee" breadcrumbs="Employees">
            {isLoading && <Spinner block />}
            {error && <Text color="red">Oh no! Some error happened</Text>}
            {!isLoading && employee && <EditEmployeeForm employee={employee} />}
        </Page>
    );
};

export default EditEmployeePage;
