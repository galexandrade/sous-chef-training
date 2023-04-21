import { IconBarsH, Inline, Stack } from '@7shifts/sous-chef';
import logo from './logo.svg';
import './app-side-menu.scss';
import { NavLink } from 'react-router-dom';
import { navItems } from '../../../navItems';

type Props = {
    isExpanded?: boolean;
    toggleExpand?: () => void;
};
const AppSideMenu = ({ isExpanded, toggleExpand }: Props) => {
    return (
        <Stack alignItems="stretch" space={8}>
            {isExpanded ? (
                <Stack>
                    <Inline justifyContent="space-between" alignItems="center">
                        <div className="menu-item">
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="menu-item" onClick={toggleExpand}>
                            <IconBarsH />
                        </div>
                    </Inline>
                </Stack>
            ) : (
                <Stack>
                    <div className="menu-item" onClick={toggleExpand}>
                        <IconBarsH />
                    </div>
                </Stack>
            )}
            <Stack space={0}>
                {navItems.map((item) => (
                    <NavLink
                        to={item.route}
                        key={item.route}
                        className="menu-item"
                    >
                        <div className="menu-item__content">
                            <Inline>
                                <item.icon />
                                {isExpanded && item.label}
                            </Inline>
                        </div>
                    </NavLink>
                ))}
            </Stack>
        </Stack>
    );
};

export default AppSideMenu;
