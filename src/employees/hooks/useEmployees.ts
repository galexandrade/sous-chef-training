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

    useEffect(() => {
        setIsLoading(true);
        fetchEmployees({
            cursor: queryParamCursor
        })
            .then((res) => {
                setData(res.data);
                setCursor(res.cursor);
            })
            .catch((error) => setError(error))
            .finally(() => {
                setIsLoading(false);
            });
    }, [queryParamCursor]);

    return {
        data,
        cursor,
        isLoading,
        error
    };
};
