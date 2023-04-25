import {
    IconMinusCircle,
    IconSearch,
    Inline,
    SelectField,
    TextField
} from '@7shifts/sous-chef';
import './employees-page-filters.scss';
import { useSearchParams } from 'react-router-dom';
import { debounce } from '../../../utils/debounce';

const EmployeesPageFilters = () => {
    const [queryParams, setQueryParam] = useSearchParams();
    return (
        <Inline space={12}>
            <div className="employees-page-filters__search">
                <TextField
                    name="search"
                    placeholder="Search"
                    defaultValue={queryParams.get('search') || ''}
                    prefix={<IconSearch />}
                    onChange={debounce((search) => {
                        setQueryParam({ search });
                    })}
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
