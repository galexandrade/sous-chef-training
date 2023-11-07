import { Button, InlineBanner } from '@7shifts/sous-chef';

const EmployeesInviteBanner = () => {
    return (
        <InlineBanner
            title="Employees with invite required"
            theme="warning"
            primaryButton={<Button>See employees</Button>}
        >
            You have employees that you need to invite to sign up into the app.
        </InlineBanner>
    );
};

export default EmployeesInviteBanner;
