import { PaginatedResponse } from '../Server/types';
import { Employee } from './types';

type Params = {
    cursor: string;
};
export const fetchEmployees = ({
    cursor
}: Params): Promise<PaginatedResponse<Employee[]>> => {
    return fetch(`/api/employees?cursor=${cursor}`).then((res) => res.json());
};
