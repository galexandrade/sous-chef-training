export const EMPLOYEE_STATUS = {
    NEEDS_CONTACT_INFO: 'NEEDS_CONTACT_INFO' as const,
    INVITE_REQUIRED: 'INVITE_REQUIRED' as const,
    INVITE_PENDING: 'INVITE_PENDING' as const
};

export const STATUSES_OPTIONS = {
    ALL: {
        value: null,
        label: 'All statuses'
    },
    [EMPLOYEE_STATUS.NEEDS_CONTACT_INFO]: {
        value: EMPLOYEE_STATUS.NEEDS_CONTACT_INFO,
        label: 'Needs contact info'
    },
    [EMPLOYEE_STATUS.INVITE_REQUIRED]: {
        value: EMPLOYEE_STATUS.INVITE_REQUIRED,
        label: 'Invite required'
    },
    [EMPLOYEE_STATUS.INVITE_PENDING]: {
        value: EMPLOYEE_STATUS.INVITE_PENDING,
        label: 'Invite pending'
    }
};

export const STATUSES_FILTER_OPTIONS = Object.values(STATUSES_OPTIONS);
