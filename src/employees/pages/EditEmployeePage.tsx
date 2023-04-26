import { Page, Spinner, Text } from '@7shifts/sous-chef';
import { useEmployee } from '../hooks/useEmployee';
import { useParams } from 'react-router-dom';
import EditEmployeeForm from '../components/EditEmployeeForm/EditEmployeeForm';

type Props = {};

const EditEmployeePage = (props: Props) => {
    const { id } = useParams();
    const { employee, isLoading, error } = useEmployee(id);
    return (
        <Page title="Edit employee">
            {isLoading && <Spinner block />}
            {error && <Text color="red">Oh no! Some error happened!</Text>}
            {!isLoading && employee && <EditEmployeeForm employee={employee} />}
        </Page>
    );
};

export default EditEmployeePage;
