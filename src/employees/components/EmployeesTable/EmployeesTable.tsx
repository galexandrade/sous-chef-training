import { DataTable } from '@7shifts/sous-chef';
import { useEmployees } from '../../hooks/useEmployees';
import EmployeeRow from './EmployeeRow';

type Props = {};

const EmployeesTable = (props: Props) => {
    //This is for loading data into the page
    const { isLoading, data } = useEmployees();

    return (
        <DataTable
            columns={[
                {
                    name: 'employee',
                    label: 'Employee'
                }
            ]}
            items={data}
            isLoading={isLoading}
            itemComponent={EmployeeRow}
            showActionMenu
        />
    );
};

export default EmployeesTable;
