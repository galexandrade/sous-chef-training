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
import { useNavigate } from 'react-router-dom';

const EmployeesRow = ({ item }: DataTableCustomComponent<Employee>) => {
    const navigate = useNavigate();
    const handleNavigateToEditPage = () => navigate(`./${item.id}`);

    const ACTIONS: DataTableAction[] = [
        {
            action: 'delete',
            label: 'Delete',
            onAction: () => console.log('Will delete')
        },
        {
            action: 'edit',
            label: <IconPencil />,
            onAction: handleNavigateToEditPage,
            showInKebab: false
        }
    ];
    return (
        <DataTableRow actions={ACTIONS} onClick={handleNavigateToEditPage}>
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
