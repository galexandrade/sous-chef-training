import { DataTable } from '@7shifts/sous-chef';
import { useEmployees } from '../../hooks/useEmployees';
import EmployeeRow from './EmployeeRow';
import { useSearchParams } from 'react-router-dom';

type Props = {};

const EmployeesTable = (props: Props) => {
    //This is for loading data into the page
    const { isLoading, data, cursor } = useEmployees();
    const [queryParams, setQueryParam] = useSearchParams();

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
            hasNext={!!cursor?.next}
            hasPrevious={!!cursor?.prev}
            onNextClick={() => {
                queryParams.set('cursor', cursor.next);
                setQueryParam(queryParams);
            }}
            onPreviousClick={() => {
                queryParams.set('cursor', cursor.prev);
                setQueryParam(queryParams);
            }}
        />
    );
};

export default EmployeesTable;
