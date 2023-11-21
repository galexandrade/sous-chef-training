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

const EmployeeRow = ({ item }: DataTableCustomComponent<Employee>) => {
    return (
        <DataTableRow>
            <DataTableCell columnIndex={0}>
                <Inline alignItems="center" space={12}>
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

export default EmployeeRow;
