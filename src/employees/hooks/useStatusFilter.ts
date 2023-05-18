import { useSearchParams } from 'react-router-dom';
import { SelectOption } from '@7shifts/sous-chef';
import { STATUSES_OPTIONS } from '../constants';

type UseStatusFilter = {
    statusValue: SelectOption<string>;
    setStatus: (value: SelectOption<string>) => void;
};
export const useStatusFilter = (): UseStatusFilter => {
    const [queryParams, setQueryParam] = useSearchParams();

    const setStatus = (option: SelectOption<string>) => {
        queryParams.set('status', option.value);
        queryParams.delete('cursor');
        setQueryParam(queryParams);
    };

    return {
        statusValue:
            STATUSES_OPTIONS[queryParams.get('status')] || STATUSES_OPTIONS.ALL,
        setStatus
    };
};
