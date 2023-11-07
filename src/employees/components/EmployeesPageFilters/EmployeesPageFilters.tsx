import {
    IconMinusCircle,
    IconSearch,
    Inline,
    SelectField,
    TextField
} from '@7shifts/sous-chef';
import { STATUSES_OPTIONS } from '../../constants';
import './employees-page-filters.scss';

const EmployeesPageFilters = () => {
    return (
        <Inline space={12}>
            <div className="employees-page-filters__search">
                <TextField
                    name="search"
                    placeholder="Search"
                    prefix={<IconSearch />}
                />
            </div>
            <SelectField
                name="status"
                placeholder="All statuses"
                options={Object.values(STATUSES_OPTIONS)}
                prefix={<IconMinusCircle />}
                asToolbarFilter
            />
        </Inline>
    );
};

export default EmployeesPageFilters;
