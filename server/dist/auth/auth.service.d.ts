import { Pool } from 'pg';
import { LoginDto } from './dto/login.dto';
export declare class AuthService {
    private conn;
    constructor(conn: Pool);
    login(loginDto: LoginDto): Promise<any>;
}
