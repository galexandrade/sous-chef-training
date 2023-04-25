import {
    Button,
    IconMinusCircle,
    IconSearch,
    Inline,
    SelectField,
    TextField
} from '@7shifts/sous-chef';
import './employees-page-filters.scss';
import { useSearchParams } from 'react-router-dom';
import { debounce } from '../../../utils/debounce';
import { useRef } from 'react';

const EmployeesPageFilters = () => {
    const searchRef = useRef<HTMLInputElement>();
    const [queryParams, setQueryParam] = useSearchParams();
    const hasFilters = queryParams.has('search') || queryParams.has('statuses');

    const handleResetFilters = () => {
        setQueryParam({});
        if (searchRef.current) {
            searchRef.current.value = '';
        }
    };

    return (
        <Inline space={12}>
            <div className="employees-page-filters__search">
                <TextField
                    ref={searchRef}
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
            {hasFilters && (
                <Button theme="link-primary" onClick={handleResetFilters}>
                    Reset filters
                </Button>
            )}
        </Inline>
    );
};

export default EmployeesPageFilters;
