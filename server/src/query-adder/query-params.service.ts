import { Global, Injectable } from '@nestjs/common';

@Global()
@Injectable()
export class QueryParamsService {
  addQueryParams(
    query: string,
    params: {
      page: number;
      pageSize: number;
      search: string;
    },
  ): [string, any[]] {
    const page = params.page || 1;
    const pageSize = params.pageSize || 10;

    const values = [];

    if (params.search) {
      query += `WHERE name ILIKE $1`;
      values.push(`%${params.search}%`);
    }

    const valuePosition = values.length + 1;
    query += `
    LIMIT $${valuePosition}
    OFFSET (($${valuePosition + 1} - 1) * $${valuePosition})
    `;

    values.push(pageSize);
    values.push(page);

    return [query, values];
  }
}
