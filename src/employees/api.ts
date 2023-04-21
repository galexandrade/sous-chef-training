import { PaginatedResponse } from '../Server/types';
import { Employee } from './types';

export const fetchEmployees = (): Promise<PaginatedResponse<Employee[]>> => {
    return fetch('/api/employees').then((res) => res.json());
};
