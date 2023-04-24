import {
    IconMinusCircle,
    IconSearch,
    Inline,
    SelectField,
    TextField
} from '@7shifts/sous-chef';
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
                name="statuses"
                placeholder="All statuses"
                options={[]}
                prefix={<IconMinusCircle />}
            />
        </Inline>
    );
};

export default EmployeesPageFilters;
