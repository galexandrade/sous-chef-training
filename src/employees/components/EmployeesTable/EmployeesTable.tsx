import { DataTable } from '@7shifts/sous-chef';
import { useEmployees } from '../../hooks/useEmployees';

type Props = {};

const EmployeesTable = (props: Props) => {
    //This is for loading data into the page
    const { isLoading, data } = useEmployees();

    return <DataTable items={data} isLoading={isLoading} />;
};

export default EmployeesTable;
