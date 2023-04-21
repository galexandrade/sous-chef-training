import {
    Avatar,
    IconChevronDown,
    IconComment,
    IconMegaphone,
    IconSearch,
    Inline,
    TextField
} from '@7shifts/sous-chef';
import './app-top-nav.scss';

const AppTopNav = () => {
    return (
        <Inline justifyContent="space-between">
            <Inline alignItems="center">
                <Avatar />
                <Inline space={8}>
                    Scooter's Coffee
                    <IconChevronDown size="small" />
                </Inline>
            </Inline>
            <Inline alignItems="center">
                <div className="app-top-nav__search">
                    <TextField
                        name="search"
                        prefix={<IconSearch />}
                        placeholder="Search"
                    />
                </div>
                <IconMegaphone />
                <IconComment />
                <Avatar />
            </Inline>
        </Inline>
    );
};

export default AppTopNav;
