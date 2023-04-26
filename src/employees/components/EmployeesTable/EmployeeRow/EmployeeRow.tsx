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
import EmployeeStatusBadge from '../EmployeeStatusBadge/EmployeeStatusBadge';
import { useNavigate } from 'react-router-dom';

const EmployeeRow = ({ item }: DataTableCustomComponent<Employee>) => {
    const navigate = useNavigate();
    return (
        <DataTableRow onClick={() => navigate(`./${item.id}`)}>
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
