import { DataTable } from '@7shifts/sous-chef';
import { useEmployees } from '../../hooks/useEmployees';

type Props = {};

const EmployeesTable = (props: Props) => {
    const { data, isLoading } = useEmployees();

    return <DataTable items={data} isLoading={isLoading} />;
};

export default EmployeesTable;
