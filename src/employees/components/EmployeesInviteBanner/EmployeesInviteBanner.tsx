import { Button, InlineBanner } from '@7shifts/sous-chef';

type Props = {};

const EmployeesInviteBanner = (props: Props) => {
    return (
        <InlineBanner
            primaryButton={<Button>See employees</Button>}
            theme="warning"
            title="Employees with invite required"
        >
            You have employees that you need to invite to sign up into the app.
        </InlineBanner>
    );
};

export default EmployeesInviteBanner;
