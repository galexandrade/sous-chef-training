import { Model, Server } from 'miragejs';
import employees from './data/employees.json';
import {
    generateCursor,
    getCurrentPageFromCursor,
    getPaginatedData
} from './pagination';
import { TIMING } from './constants';

new Server({
    models: {
        employee: Model
    },
    seeds(server) {
        employees.forEach((employee) => server.create('employee', employee));
    },
    routes() {
        this.namespace = 'api';

        this.get(
            '/employees',
            (schema: any, request) => {
                const { cursor, search, status } = request.queryParams;

                try {
                    let page = getCurrentPageFromCursor(cursor);
                    const nextPage = page + 1;

                    const filteredEmployees = schema.employees
                        .all()
                        .models.filter(({ attrs: employee }) => {
                            let doesNameMatch = true;
                            let doesStatusMatch = true;
                            if (search !== 'null') {
                                const name = `${employee.firstName} ${employee.firstName}`;
                                doesNameMatch = name
                                    .toLocaleLowerCase()
                                    .includes(search.toLocaleLowerCase());
                            }
                            if (status !== 'null') {
                                if (!employee.status) {
                                    doesStatusMatch = false;
                                } else {
                                    doesStatusMatch =
                                        employee.status === status;
                                }
                            }
                            return doesNameMatch && doesStatusMatch;
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

        this.post('/employees', (schema: any, request) => {
            const attrs = JSON.parse(request.requestBody);

            attrs.id = String(schema.employees.all().models.length + 1);

            return schema.employees.create(attrs);
        });
    }
});
