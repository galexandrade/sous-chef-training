import { Page, Spinner } from '@7shifts/sous-chef';
import { useEmployee } from '../hooks/useEmployee';
import { useParams } from 'react-router-dom';

type Props = {};

const EditEmployeePage = (props: Props) => {
    const { id } = useParams();
    const { employee, isLoading } = useEmployee(id);
    return <Page title="Edit employee">{isLoading && <Spinner block />}</Page>;
};

export default EditEmployeePage;
