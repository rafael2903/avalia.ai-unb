export declare class QueryParamsService {
    addQueryParams(query: string, params: {
        page: number;
        pageSize: number;
        search: string;
    }): [string, any[]];
}
