import { DataTable, EmptyState, Inline } from '@7shifts/sous-chef';
import { useEmployees } from '../../hooks/useEmployees';
import { useSearchParams } from 'react-router-dom';
import EmployeeRow from './EmployeeRow/EmployeeRow';

type Props = {};

const EmployeesTable = (props: Props) => {
    //This is for loading data into the page
    const { isLoading, data, error, cursor } = useEmployees();
    const [queryParams, setQueryParam] = useSearchParams();

    if (!isLoading && data.length === 0) {
        return (
            <Inline justifyContent="center">
                <EmptyState
                    mediaUrl="https://app.7shifts.com/img/no-results-cookie.png"
                    size="small"
                    title="No employees found"
                >
                    No employees match what you are looking for. Try changing
                    your filters to see other employees.
                </EmptyState>
            </Inline>
        );
    }

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
            showActionMenu
        />
    );
};

export default EmployeesTable;
