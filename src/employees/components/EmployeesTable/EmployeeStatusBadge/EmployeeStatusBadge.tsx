import { Badge, IconExclaimation } from '@7shifts/sous-chef';
import { EmployeeStatus } from '../../../types';

type Props = {
    status: EmployeeStatus;
};

const EmployeeStatusBadge = ({ status }: Props) => {
    const badge = getBadgeDetails(status);
    return (
        <Badge theme={badge.theme} title={badge.description}>
            <IconExclaimation size="small" />
        </Badge>
    );
};

const getBadgeDetails = (status: EmployeeStatus) => {
    if (status === 'NEEDS_CONTACT_INFO') {
        return {
            theme: 'danger' as const,
            description: 'Needs contact info'
        };
    }
    if (status === 'INVITE_PENDING') {
        return { theme: 'info' as const, description: 'Invite pending' };
    }
    return { theme: 'warning' as const, description: 'Invite required' };
};

export default EmployeeStatusBadge;
