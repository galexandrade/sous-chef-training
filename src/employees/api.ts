import { PaginatedResponse } from '../Server/types';
import { Employee } from './types';

type Params = {
    cursor: string;
    search: string;
};
export const fetchEmployees = ({
    cursor,
    search
}: Params): Promise<PaginatedResponse<Employee[]>> => {
    return fetch(`/api/employees?cursor=${cursor}&search=${search}`).then(
        (res) => res.json()
    );
};
