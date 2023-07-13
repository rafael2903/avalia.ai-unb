import { Pool } from 'pg';
import { QueryParamsService } from 'src/query-adder/query-params.service';
import { QueryDto } from 'src/query-adder/query.dto';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
export declare class TeachersService {
    private conn;
    private queryAdder;
    constructor(conn: Pool, queryAdder: QueryParamsService);
    create(createTeacherDto: CreateTeacherDto): Promise<any>;
    findAll(params: QueryDto): Promise<any[]>;
    findOne(id: number): Promise<any>;
    update(id: number, updateTeacherDto: UpdateTeacherDto): Promise<any>;
    remove(id: number): Promise<import("pg").QueryResult<any>>;
}
