import { PaginatedResponse } from '../Server/types';
import { Employee } from './types';

export const fetchEmployees = (): Promise<PaginatedResponse<Employee[]>> => {
    return fetch('/api/employeess?cursor=MUNVUlNPUi1QQUdF').then((res) =>
        res.json()
    );
};
