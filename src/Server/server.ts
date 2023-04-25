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
                const { cursor, search } = request.queryParams;

                try {
                    let page = getCurrentPageFromCursor(cursor);
                    const nextPage = page + 1;

                    const filteredEmployees =
                        search === 'null'
                            ? employees
                            : employees.filter((employee) => {
                                  const name = `${employee.firstName} ${employee.firstName}`;
                                  return name
                                      .toLocaleLowerCase()
                                      .includes(search.toLocaleLowerCase());
                              });

                    const dataPaginated = getPaginatedData(
                        page,
                        filteredEmployees
                    );
                    const hasNextPage =
                        getPaginatedData(page + 1, filteredEmployees).length >
                        0;

                    return {
                        data: dataPaginated,
                        cursor: {
                            next: hasNextPage && generateCursor(nextPage),
                            prev: page > 0 && generateCursor(page - 1)
                        }
                    };
                } catch (error) {
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
