import { DataTable } from '@7shifts/sous-chef';
import { useEmployees } from '../../hooks/useEmployees';
import EmployeesRow from './EmployeesRow';
import { useSearchParams } from 'react-router-dom';

type Props = {};

const EmployeesTable = (props: Props) => {
    const { data, isLoading, cursor } = useEmployees();
    const [queryParams, setQueryParams] = useSearchParams();

    console.log(cursor);

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
            showActionMenu
            hasNext={Boolean(cursor.next)}
            hasPrevious={Boolean(cursor.prev)}
            onNextClick={() => {
                queryParams.set('cursor', cursor.next);
                setQueryParams(queryParams);
            }}
            onPreviousClick={() => {
                queryParams.set('cursor', cursor.prev);
                setQueryParams(queryParams);
            }}
        />
    );
};

export default EmployeesTable;
