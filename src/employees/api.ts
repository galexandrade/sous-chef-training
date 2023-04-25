import { PaginatedResponse } from '../Server/types';
import { Employee } from './types';

type Params = {
    cursor: string;
    search: string;
    status: string;
};
export const fetchEmployees = (
    params: Params
): Promise<PaginatedResponse<Employee[]>> => {
    const queryParams = new URLSearchParams(params).toString();
    return fetch(`/api/employees?${queryParams}`).then((res) => res.json());
};
