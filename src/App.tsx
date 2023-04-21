import LayoutFrame from './base-app/components/LayoutFrame';
import AppSideMenu from './base-app/components/AppSideMenu/AppSideMenu';
import AppTopNav from './base-app/components/AppTopNav/AppTopNav';
import { Outlet } from 'react-router-dom';

const App = () => {
    return (
        <LayoutFrame sideNav={<AppSideMenu />} topBar={<AppTopNav />}>
            <Outlet />
        </LayoutFrame>
    );
};

export default App;
