import { Badge, IconExclaimation } from '@7shifts/sous-chef';
import { EmployeeStatus } from '../../../types';
import { EMPLOYEE_STATUS } from '../../../constants';

type Props = {
    status: EmployeeStatus;
};

const EmployeeStatusBadge = ({ status }: Props) => {
    const badgeDetails = getBadgeDetails(status);
    return (
        <Badge title={badgeDetails.description} theme={badgeDetails.theme}>
            <IconExclaimation size="small" />
        </Badge>
    );
};

const getBadgeDetails = (status: EmployeeStatus) => {
    if (status === EMPLOYEE_STATUS.NEEDS_CONTACT_INFO) {
        return {
            theme: 'danger' as const,
            description: 'Needs contact info'
        };
    }
    if (status === EMPLOYEE_STATUS.INVITE_PENDING) {
        return {
            theme: 'info' as const,
            description: 'Invite pending'
        };
    }
    return {
        theme: 'warning' as const,
        description: 'Invite required'
    };
};

export default EmployeeStatusBadge;
