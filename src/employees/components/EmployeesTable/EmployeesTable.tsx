import { DataTable } from '@7shifts/sous-chef';
import { useEmployees } from '../../hooks/useEmployees';
import { useSearchParams } from 'react-router-dom';
import EmployeeRow from './EmployeeRow/EmployeeRow';

type Props = {};

const EmployeesTable = (props: Props) => {
    //This is for loading data into the page
    const { isLoading, data, error, cursor } = useEmployees();
    const [_, setQueryParam] = useSearchParams();

    return (
        <DataTable
            items={data}
            isLoading={isLoading}
            hasNext={!!cursor?.next}
            hasPrevious={!!cursor?.prev}
            onNextClick={() => {
                setQueryParam('?cursor=' + cursor.next);
            }}
            onPreviousClick={() => {
                setQueryParam('?cursor=' + cursor.prev);
            }}
            itemComponent={EmployeeRow}
        />
    );
};

export default EmployeesTable;
