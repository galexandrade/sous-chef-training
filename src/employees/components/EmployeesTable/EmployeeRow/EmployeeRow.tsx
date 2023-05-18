import {
    Avatar,
    DataTableAction,
    DataTableCustomComponent,
    DataTableRow,
    IconPencil,
    Inline,
    Stack,
    Text
} from '@7shifts/sous-chef';
import { Employee } from '../../../types';
import { useNavigate } from 'react-router-dom';

const EmployeeRow = (props: DataTableCustomComponent<Employee>) => {
    const { firstName, lastName, photo, email, id } = props.item;
    const navigate = useNavigate();
    const ACTIONS: DataTableAction[] = [
        {
            action: 'delete',
            label: 'Delete',
            onAction: () => console.log('Will delete')
        },
        {
            action: 'edit',
            label: <IconPencil />,
            onAction: () => navigate(id),
            showInKebab: false
        }
    ];
    return (
        <DataTableRow actions={ACTIONS} onClick={() => navigate(id)}>
            <Inline alignItems="center" space={12}>
                <Avatar url={photo} size="large" />
                <Stack space={0}>
                    <Text>{firstName + ' ' + lastName}</Text>
                    <Text as="caption" color="#767676">
                        {email}
                    </Text>
                </Stack>
            </Inline>
        </DataTableRow>
    );
};

export default EmployeeRow;
