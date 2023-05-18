import { useSearchParams } from 'react-router-dom';

export const useUpdateCursor = () => {
    const [queryParams, setQueryParam] = useSearchParams();

    const updateCursor = (cursor: string) => {
        queryParams.set('cursor', cursor);
        setQueryParam(queryParams);
    };

    return updateCursor;
};
