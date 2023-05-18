import { useSearchParams } from 'react-router-dom';

export const useResetFilters = (
    /**
     * This is necessary so we can reset the value within the search field as its value is not hooked with the URL
     */
    searchFieldRef: React.RefObject<HTMLInputElement>
) => {
    const [, setQueryParams] = useSearchParams();

    const resetFilters = () => {
        setQueryParams({});
        if (searchFieldRef.current) {
            searchFieldRef.current.value = '';
        }
    };

    return resetFilters;
};
