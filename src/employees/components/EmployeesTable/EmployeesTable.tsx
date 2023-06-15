import { DataTable } from '@7shifts/sous-chef';
import { useEmployees } from '../../hooks/useEmployees';
import EmployeesRow from './EmployeesRow';

type Props = {};

const EmployeesTable = (props: Props) => {
    const { data, isLoading } = useEmployees();

    const columns = [
        {
            label: 'Employee',
            name: 'employee'
        }
    ];

    return (
        <DataTable
            items={data}
            isLoading={isLoading}
            columns={columns}
            itemComponent={EmployeesRow}
        />
    );
};

export default EmployeesTable;
