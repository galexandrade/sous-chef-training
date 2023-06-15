import { Page } from '@7shifts/sous-chef';
import EmployeesPageActions from '../components/EmployeesPageActions';
import EmployeesInviteBanner from '../components/EmployeesInviteBanner';

const EmployeesPage = () => {
    //This is for loading data into the page
    //const { isLoading, data, error, cursor } = useEmployees();
    return (
        <Page
            title="Employees"
            actions={<EmployeesPageActions />}
            banner={<EmployeesInviteBanner />}
        >
            Page content here
        </Page>
    );
};

export default EmployeesPage;
