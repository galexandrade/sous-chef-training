export type Cursor = {
    prev?: string;
    next?: string;
};

export type PaginatedResponse<T> = {
    data: T;
    cursor: Cursor;
};
