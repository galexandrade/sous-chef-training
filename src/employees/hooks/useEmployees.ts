import { useEffect, useState } from 'react';
import { Employee } from '../types';
import { fetchEmployees } from '../api';
import { Cursor } from '../../Server/types';
import { useSearchParams } from 'react-router-dom';

type UseEmployees = {
    data: Employee[];
    cursor: Cursor;
    isLoading: boolean;
    error: string;
};
export const useEmployees = (): UseEmployees => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const [data, setData] = useState([]);
    const [cursor, setCursor] = useState<Cursor>();

    const [params] = useSearchParams();
    const queryParamCursor = params.get('cursor');
    const queryParamSearch = params.get('search');
    const queryParamStatus = params.get('status');

    useEffect(() => {
        setIsLoading(true);
        fetchEmployees({
            cursor: queryParamCursor,
            search: queryParamSearch,
            status: queryParamStatus
        })
            .then((res) => {
                setData(res.data);
                setCursor(res.cursor);
            })
            .catch((error) => setError(error))
            .finally(() => {
                setIsLoading(false);
            });
    }, [queryParamCursor, queryParamSearch, queryParamStatus]);

    return {
        data,
        cursor,
        isLoading,
        error
    };
};
