import {
    Button,
    IconMinusCircle,
    IconSearch,
    Inline,
    TextField,
    ToolbarSelect
} from '@7shifts/sous-chef';
import './employees-page-filters.scss';
import { STATUSES_FILTER_OPTIONS } from '../../constants';
import { useSearchField } from '../../hooks/useSearchField';
import { useStatusFilter } from '../../hooks/useStatusFilter';
import { useResetFilters } from '../../hooks/useResetFilters';
import { useRef } from 'react';

type Props = {};

const EmployeesPageFilters = (props: Props) => {
    const { searchValue, setSearchValue } = useSearchField();
    const { statusValue, setStatus } = useStatusFilter();
    const searchRef = useRef<HTMLInputElement>(null);
    const resetFilters = useResetFilters(searchRef);

    const hasFilter = searchValue !== '' || statusValue.value;

    return (
        <Inline space={12}>
            <div className="employees-page-filters__search">
                <TextField
                    name="search"
                    defaultValue={searchValue}
                    onChange={setSearchValue}
                    placeholder="Search"
                    prefix={<IconSearch />}
                    ref={searchRef}
                />
            </div>
            <ToolbarSelect
                name="status"
                value={statusValue}
                onChange={setStatus}
                prefix={<IconMinusCircle />}
                placeholder="All statuses"
                options={STATUSES_FILTER_OPTIONS}
            />
            {hasFilter && (
                <Button theme="link-primary" onClick={resetFilters}>
                    Reset filters
                </Button>
            )}
        </Inline>
    );
};

export default EmployeesPageFilters;
