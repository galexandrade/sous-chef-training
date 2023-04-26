import { PaginatedResponse } from '../Server/types';
import { Employee } from './types';

type FetchParams = {
    cursor: string;
    search: string;
    status: string;
};
export const fetchEmployees = (
    params: FetchParams
): Promise<PaginatedResponse<Employee[]>> => {
    const queryParams = new URLSearchParams(params).toString();
    return fetch(`/api/employees?${queryParams}`).then((res) => res.json());
};

type AddEmployeeParams = {
    firstName?: string;
    lastName?: string;
    email?: string;
    birthday?: Date;
};
export const addEmployees = (
    employeeData: AddEmployeeParams
): Promise<PaginatedResponse<Employee[]>> => {
    return fetch('/api/employees', {
        method: 'POST',
        body: JSON.stringify(employeeData)
    }).then((res) => res.json());
};
