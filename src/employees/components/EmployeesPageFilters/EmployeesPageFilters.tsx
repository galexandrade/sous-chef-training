import {
    IconMinusCircle,
    IconSearch,
    Inline,
    SelectField,
    TextField
} from '@7shifts/sous-chef';
import './employees-page-filters.scss';
import { useSearchParams } from 'react-router-dom';

const EmployeesPageFilters = () => {
    const [queryParams, setQueryParam] = useSearchParams();
    return (
        <Inline space={12}>
            <div className="employees-page-filters__search">
                <TextField
                    name="search"
                    placeholder="Search"
                    value={queryParams.get('search') || ''}
                    prefix={<IconSearch />}
                    onChange={(search) => {
                        setQueryParam({ search });
                    }}
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
