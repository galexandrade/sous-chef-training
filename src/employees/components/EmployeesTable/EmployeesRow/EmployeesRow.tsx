import {
    Avatar,
    DataTableCell,
    DataTableCustomComponent,
    DataTableRow,
    Inline,
    Stack,
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
                    <Stack space={0}>
                        <Text>
                            {item.firstName} {item.lastName}
                        </Text>
                        <Text as="caption" color="grey-400">
                            {item.email}
                        </Text>
                    </Stack>
                </Inline>
            </DataTableCell>
        </DataTableRow>
    );
};

export default EmployeesRow;
