import { DataTable } from '@7shifts/sous-chef';
import { useEmployees } from '../../hooks/useEmployees';
import { useUpdateCursor } from '../../hooks/useUpdateCursor';
import EmployeeRow from './EmployeeRow/EmployeeRow';

type Props = {};

const EmployeesTable = (props: Props) => {
    const { data, isLoading, cursor } = useEmployees();
    const updateCursor = useUpdateCursor();
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
            itemComponent={EmployeeRow}
            hasPrevious={!!cursor?.prev}
            onNextClick={() => updateCursor(cursor?.next)}
            onPreviousClick={() => updateCursor(cursor?.prev)}
            showActionMenu
        />
    );
};

export default EmployeesTable;
