const CURSOR_HASH = 'CURSOR-PAGE';
const LIMIT = 20;

export const getCurrentPageFromCursor = (cursor?: string): number => {
    const DEFAULT_PAGE = 0;
    if (!cursor || cursor === '') {
        return DEFAULT_PAGE;
    }
    const page = Number(b64_to_utf8(cursor).replace(CURSOR_HASH, ''));
    if (!Number.isInteger(page)) {
        throw Error('Invalid cursor');
    }
    return page;
};

export const generateCursor = (page: number): string =>
    utf8_to_b64(page + CURSOR_HASH);

const utf8_to_b64 = (str: string) => {
    return window.btoa(unescape(encodeURIComponent(str)));
};

const b64_to_utf8 = (str: string) => {
    return decodeURIComponent(escape(window.atob(str)));
};

export const getPaginatedData = (page: number, data: unknown[]) => {
    const start = page * LIMIT;
    const end = start + LIMIT;
    return data.slice(start, end);
};
