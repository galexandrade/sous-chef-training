import { DataTable, Page, Text } from '@7shifts/sous-chef';
import { useEmployees } from '../hooks/useEmployees';

const EmployeesPage = () => {
    //This is for loading data into the page
    const { isLoading, data, error, cursor } = useEmployees();

    return (
        <Page title="View Employees">
            <DataTable
                items={data}
                isLoading={isLoading}
                hasNext={!!cursor.next}
                hasPrevious={!!cursor.prev}
                onNextClick={() => console.log('load next page', cursor.next)}
                onPreviousClick={() =>
                    console.log('load prev page', cursor.prev)
                }
            />
        </Page>
    );
};

export default EmployeesPage;
