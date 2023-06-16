import { Page, Spinner, Text } from '@7shifts/sous-chef';
import EditEmployeeForm from '../components/EditEmployeeForm';
import { useParams } from 'react-router-dom';
import { useEmployee } from '../hooks/useEmployee';

type Props = {};

const EditEmployeePage = (props: Props) => {
    const { id } = useParams();
    const { isLoading, error, employee } = useEmployee(id);
    return (
        <Page title="Edit employee" breadcrumbs="Employees">
            {isLoading && <Spinner block />}
            {error && (
                <Text color="radish-400">Oh no! Something is wrong!</Text>
            )}
            {!isLoading && employee && <EditEmployeeForm employee={employee} />}
        </Page>
    );
};

export default EditEmployeePage;
