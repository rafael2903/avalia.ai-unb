import { Pool } from 'pg';
import { AuthService } from 'src/auth/auth.service';
import { QueryParamsService } from 'src/query-adder/query-params.service';
import { QueryDto } from 'src/query-adder/query.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersService {
    private conn;
    private queryAdder;
    private authService;
    constructor(conn: Pool, queryAdder: QueryParamsService, authService: AuthService);
    create(createUserDto: CreateUserDto): Promise<any>;
    findAll(params: QueryDto): Promise<any[]>;
    findOne(id: number): Promise<any>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<any>;
    remove(id: number): string;
}
