import App from './App';
import {
    ROUTES as EMPLOYEES_ROUTES,
    BASE_ROUTE as EMPLOYEES_BASE_ROUTE
} from './employees/routes';
import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
    Outlet
} from 'react-router-dom';

const Router = () => {
    const routes = createBrowserRouter([
        {
            path: '/',
            element: <App />,
            children: [
                {
                    path: EMPLOYEES_BASE_ROUTE,
                    element: <Outlet />,
                    children: EMPLOYEES_ROUTES
                },
                {
                    path: '/',
                    element: <Navigate replace to={EMPLOYEES_BASE_ROUTE} />
                }
            ]
        }
    ]);
    return <RouterProvider router={routes} />;
};

export default Router;
