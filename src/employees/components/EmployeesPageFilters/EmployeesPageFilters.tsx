import {
    IconSearch,
    Inline,
    TextField,
    ToolbarSelect
} from '@7shifts/sous-chef';
import { STATUSES_FILTER_OPTIONS } from '../../constants';
import './employees-page-filters.scss';

type Props = {};

const EmployeesPageFilters = (props: Props) => {
    return (
        <Inline space={12}>
            <div className="employees-page-filters__search">
                <TextField
                    name="search"
                    placeholder="Search"
                    prefix={<IconSearch />}
                />
            </div>
            <ToolbarSelect name="status" options={STATUSES_FILTER_OPTIONS} />
        </Inline>
    );
};

export default EmployeesPageFilters;
