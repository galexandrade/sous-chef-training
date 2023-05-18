import { DataTable, EmptyState } from '@7shifts/sous-chef';
import { useEmployees } from '../../hooks/useEmployees';
import { useUpdateCursor } from '../../hooks/useUpdateCursor';
import EmployeeRow from './EmployeeRow/EmployeeRow';

type Props = {};

const EmployeesTable = (props: Props) => {
    const { data, isLoading, cursor } = useEmployees();
    const updateCursor = useUpdateCursor();

    if (!isLoading && data.length === 0) {
        return (
            <EmptyState
                mediaUrl="/images/EmptyState.png"
                size="small"
                title="Setup your first location"
            >
                Get started by adding your first location to begin managing your
                restaurant.
            </EmptyState>
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
            itemComponent={EmployeeRow}
            hasNext={!!cursor.next}
            hasPrevious={!!cursor.prev}
            onNextClick={() => updateCursor(cursor.next)}
            onPreviousClick={() => updateCursor(cursor.prev)}
            showActionMenu
        />
    );
};

export default EmployeesTable;
