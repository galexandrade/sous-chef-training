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

const EmployeeRow = ({ item }: DataTableCustomComponent<Employee>) => {
    return (
        <DataTableRow>
            <DataTableCell columnIndex={0}>
                <Inline alignItems="center" space={12}>
                    <Avatar url={item.photo} size="large" />
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
