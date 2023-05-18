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

export const fetchEmployee = (employeeId: string): Promise<Employee> => {
    return fetch(`/api/employees/${employeeId}`)
        .then((res) => res.json())
        .then((res) => {
            return res.employee;
        });
};

type AddEmployeeFormData = {
    firstName?: string;
    lastName?: string;
    email?: string;
    birthday?: Date;
};
export const addEmployees = (
    employeeFormData: AddEmployeeFormData
): Promise<PaginatedResponse<Employee[]>> => {
    return fetch('/api/employees', {
        method: 'POST',
        body: JSON.stringify(employeeFormData)
    }).then((res) => res.json());
};

type EditEmployeeFormData = {
    firstName?: string;
    lastName?: string;
    email?: string;
    birthday?: Date;
};
export const editEmployee = (
    employeeId: string,
    employeeFormData: EditEmployeeFormData
): Promise<PaginatedResponse<Employee[]>> => {
    return fetch(`/api/employees/${employeeId}`, {
        method: 'PUT',
        body: JSON.stringify(employeeFormData)
    }).then((res) => res.json());
};
