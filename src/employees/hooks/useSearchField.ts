import { useSearchParams } from 'react-router-dom';
import { debounce } from '../../utils/debounce';

type UseSearchField = {
    searchValue: string;
    setSearchValue: (value: string) => void;
};
export const useSearchField = (): UseSearchField => {
    const [queryParams, setQueryParam] = useSearchParams();

    const onSearch = (value: string) => {
        queryParams.set('search', value);
        queryParams.delete('cursor');
        setQueryParam(queryParams);
    };

    return {
        searchValue: queryParams.get('search') || '',
        setSearchValue: debounce(onSearch)
    };
};
