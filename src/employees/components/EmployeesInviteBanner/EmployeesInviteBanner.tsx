import { Button, InlineBanner } from '@7shifts/sous-chef';
import { useSearchParams } from 'react-router-dom';
import { EMPLOYEE_STATUS } from '../../constants';

const EmployeesInviteBanner = () => {
    const [queryParams, setQueryParam] = useSearchParams();
    return (
        <InlineBanner
            title="Employees with invite required"
            theme="warning"
            primaryButton={
                <Button
                    onClick={() => {
                        queryParams.set(
                            'status',
                            EMPLOYEE_STATUS.INVITE_REQUIRED
                        );
                        queryParams.delete('cursor');
                        setQueryParam(queryParams);
                    }}
                >
                    See employees
                </Button>
            }
        >
            You have employees that you need to invite to sign up into the app.
        </InlineBanner>
    );
};

export default EmployeesInviteBanner;
