import { Server } from 'miragejs';
import employees from './data/employees.json';
import {
    generateCursor,
    getCurrentPageFromCursor,
    getPaginatedData
} from './pagination';
import { TIMING } from './constants';

new Server({
    routes() {
        this.namespace = 'api';

        this.get(
            '/employees',
            (schema, request) => {
                const { cursor } = request.queryParams;

                try {
                    let page = getCurrentPageFromCursor(cursor);
                    console.log('page', page);
                    const nextPage = page + 1;

                    const dataPaginated = getPaginatedData(page, employees);
                    const hasNextPage =
                        getPaginatedData(page + 1, employees).length > 0;

                    return {
                        data: dataPaginated,
                        cursor: {
                            next: hasNextPage && generateCursor(nextPage),
                            prev: page > 0 && generateCursor(page - 1)
                        }
                    };
                } catch (error) {
                    console.log(error);
                    return {
                        data: [],
                        cursor: {
                            next: undefined,
                            prev: undefined
                        }
                    };
                }
            },
            {
                timing: TIMING
            }
        );
    }
});
