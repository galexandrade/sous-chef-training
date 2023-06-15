import {
    Avatar,
    DataTableCell,
    DataTableCustomComponent,
    DataTableRow,
    Inline,
    Text
} from '@7shifts/sous-chef';
import { Employee } from '../../../types';
import EmployeeStatusBadge from '../EmployeeStatusBadge';

const EmployeesRow = ({ item }: DataTableCustomComponent<Employee>) => {
    return (
        <DataTableRow>
            <DataTableCell columnIndex={0}>
                <Inline space={12} alignItems="center">
                    <Avatar
                        url={item.photo}
                        size="large"
                        badge={
                            item.status && (
                                <EmployeeStatusBadge status={item.status} />
                            )
                        }
                    />
                    <Text>
                        {item.firstName} {item.lastName}
                    </Text>
                </Inline>
            </DataTableCell>
            <DataTableCell columnIndex={1}>{item.email}</DataTableCell>
        </DataTableRow>
    );
};

export default EmployeesRow;
