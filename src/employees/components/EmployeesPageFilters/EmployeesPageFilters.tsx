import {
    Button,
    IconMinusCircle,
    IconSearch,
    Inline,
    SelectOption,
    TextField,
    ToolbarSelect
} from '@7shifts/sous-chef';
import { STATUSES_OPTIONS } from '../../constants';
import './employees-page-filters.scss';
import { useSearchField } from '../../hooks/useSearchField';
import { useSearchParams } from 'react-router-dom';
import { useRef } from 'react';

const EmployeesPageFilters = () => {
    const searchRef = useRef<HTMLInputElement>();
    const { searchValue, setSearchValue } = useSearchField();
    const [queryParams, setQueryParams] = useSearchParams();
    const hasFilters = queryParams.has('search') || queryParams.has('status');

    const handleResetFilters = () => {
        setQueryParams({});
        if (searchRef.current) {
            searchRef.current.value = '';
        }
    };

    return (
        <Inline space={12}>
            <div className="employees-page-filters__search">
                <TextField
                    name="search"
                    placeholder="Search"
                    prefix={<IconSearch />}
                    defaultValue={searchValue}
                    onChange={setSearchValue}
                    ref={searchRef}
                />
            </div>
            <ToolbarSelect
                name="status"
                placeholder="All statuses"
                options={Object.values(STATUSES_OPTIONS)}
                prefix={<IconMinusCircle />}
                value={
                    STATUSES_OPTIONS[queryParams.get('status')] ||
                    STATUSES_OPTIONS.ALL
                }
                onChange={(statusOption: SelectOption<string>) => {
                    queryParams.set('status', statusOption.value);
                    queryParams.delete('cursor');
                    setQueryParams(queryParams);
                }}
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
