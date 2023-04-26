import { useEffect, useState } from 'react';
import { Employee } from '../types';
import { fetchEmployee } from '../api';

type UseEmployee = {
    employee: Employee;
    isLoading: boolean;
    error: string;
};
export const useEmployee = (employeeId: string): UseEmployee => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const [employee, setEmployee] = useState<Employee>();

    useEffect(() => {
        setIsLoading(true);
        fetchEmployee(employeeId)
            .then((res) => {
                setEmployee(res);
            })
            .catch((error) => setError(error))
            .finally(() => {
                setIsLoading(false);
            });
    }, [employeeId]);

    return {
        employee,
        isLoading,
        error
    };
};
