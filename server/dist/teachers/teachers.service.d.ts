import { Pool } from 'pg';
import { QueryParamsService } from 'src/query-adder/query-params.service';
import { QueryDto } from 'src/query-adder/query.dto';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
export declare class TeachersService {
    private conn;
    private queryAdder;
    constructor(conn: Pool, queryAdder: QueryParamsService);
    create(createTeacherDto: CreateTeacherDto): string;
    findAll(params: QueryDto): Promise<any[]>;
    findOne(id: number): Promise<import("pg").QueryResult<any>>;
    update(id: number, updateTeacherDto: UpdateTeacherDto): string;
    remove(id: number): string;
}
