export type EmployeeStatus =
    | 'NEEDS_CONTACT_INFO'
    | 'INVITE_REQUIRED'
    | 'INVITE_PENDING';

type Contact = {
    name: string;
    email: string;
};

export type Employee = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    birthday: string;
    photo: string;
    status?: EmployeeStatus;
    contacts?: Contact[];
};
