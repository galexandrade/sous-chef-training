export type EmployeeStatus =
    | 'NEEDS_CONTACT_INFO'
    | 'INVITE_REQUIRED'
    | 'INVITE_PENDING';

export type Employee = {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    birtday: string;
    photo: string;
    status?: EmployeeStatus;
};
