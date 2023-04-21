import { useEffect, useState } from 'react';
import { Employee } from '../types';
import { fetchEmployees } from '../api';
import { Cursor } from '../../Server/types';

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

    useEffect(() => {
        setIsLoading(true);
        fetchEmployees()
            .then((res) => {
                setData(res.data);
                setCursor(res.cursor);
            })
            .catch((error) => setError(error))
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    return {
        data,
        cursor,
        isLoading,
        error
    };
};
