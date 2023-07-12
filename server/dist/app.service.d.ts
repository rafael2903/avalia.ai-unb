import { Pool } from 'pg';
export declare class AppService {
    private conn;
    constructor(conn: Pool);
    getHello(): Promise<any>;
}
