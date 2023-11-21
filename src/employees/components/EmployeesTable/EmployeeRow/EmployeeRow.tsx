import {
    Avatar,
    DataTableAction,
    DataTableCell,
    DataTableCustomComponent,
    DataTableRow,
    IconPencil,
    Inline,
    Stack,
    Text
} from '@7shifts/sous-chef';
import { Employee } from '../../../types';
import EmployeeStatusBadge from '../EmployeeStatusBadge';

const EmployeeRow = ({ item }: DataTableCustomComponent<Employee>) => {
    const actions: DataTableAction[] = [
        {
            action: 'edit',
            onAction: () => console.log('Will edit'),
            label: <IconPencil />,
            showInKebab: false
        },
        {
            action: 'delete',
            onAction: () => console.log('Will delete'),
            label: 'Delete'
        }
    ];
    return (
        <DataTableRow actions={actions}>
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
                    <Stack space={0}>
                        <Text>
                            {item.firstName} {item.lastName}
                        </Text>
                        <Text as="caption" color="grey-300">
                            {item.email}
                        </Text>
                    </Stack>
                </Inline>
            </DataTableCell>
        </DataTableRow>
    );
};

export default EmployeeRow;
