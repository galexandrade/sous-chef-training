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
import EmployeeStatusBadge from '../EmployeeStatusBadge/EmployeeStatusBadge';
import { useNavigate } from 'react-router-dom';

const EmployeeRow = ({ item }: DataTableCustomComponent<Employee>) => {
    const navigate = useNavigate();
    const handleNavigateToEdit = () => navigate(`./${item.id}`);
    const actions: DataTableAction[] = [
        {
            action: 'edit',
            onAction: handleNavigateToEdit,
            label: <IconPencil />,
            showInKebab: false
        },
        {
            action: 'delete',
            onAction: handleNavigateToEdit,
            label: 'Delete'
        }
    ];
    return (
        <DataTableRow onClick={handleNavigateToEdit} actions={actions}>
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
                        <Text as="caption" color="grey">
                            {item.email}
                        </Text>
                    </Stack>
                </Inline>
            </DataTableCell>
        </DataTableRow>
    );
};

export default EmployeeRow;
