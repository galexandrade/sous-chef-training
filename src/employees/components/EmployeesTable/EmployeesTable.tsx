import { DataTable } from '@7shifts/sous-chef';
import { useEmployees } from '../../hooks/useEmployees';
import { useSearchParams } from 'react-router-dom';
import EmployeeRow from './EmployeeRow/EmployeeRow';

type Props = {};

const EmployeesTable = (props: Props) => {
    //This is for loading data into the page
    const { isLoading, data, error, cursor } = useEmployees();
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
            itemComponent={EmployeeRow}
        />
    );
};

export default EmployeesTable;
