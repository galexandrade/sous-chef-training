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
                    name: 'firstName',
                    label: 'FirstName'
                },
                {
                    name: 'email',
                    label: 'Email'
                }
            ]}
            items={data}
            isLoading={isLoading}
            itemComponent={EmployeeRow}
        />
    );
};

export default EmployeesTable;
