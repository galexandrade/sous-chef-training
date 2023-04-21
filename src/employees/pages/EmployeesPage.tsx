import { DataTable, Page, Text } from '@7shifts/sous-chef';
import { useEmployees } from '../hooks/useEmployees';
import { useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';

const EmployeesPage = () => {
    //This is for loading data into the page
    const { isLoading, data, error, cursor } = useEmployees();
    const [_, setQueryParam] = useSearchParams();

    return (
        <Page title="View Employees">
            <DataTable
                items={data}
                isLoading={isLoading}
                hasNext={!!cursor?.next}
                hasPrevious={!!cursor?.prev}
                onNextClick={() => {
                    setQueryParam('?cursor=' + cursor.next);
                }}
                onPreviousClick={() => {
                    setQueryParam('?cursor=' + cursor.prev);
                }}
            />
        </Page>
    );
};

export default EmployeesPage;
