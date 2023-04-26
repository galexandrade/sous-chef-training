import EditEmployeePage from './pages/EditEmployeePage';
import EmployeesPage from './pages/EmployeesPage';

export const BASE_ROUTE = '/employees';
export const ROUTES = [
    {
        index: true,
        element: <EmployeesPage />
    },
    {
        path: '/employees/:id',
        element: <EditEmployeePage />
    }
];
