import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { QueryParamsService } from 'src/query-adder/query-params.service';
import { Pool } from 'pg';
import { QueryDto } from 'src/query-adder/query.dto';
export declare class SubjectsService {
    private conn;
    private queryAdder;
    constructor(conn: Pool, queryAdder: QueryParamsService);
    create(createSubjectDto: CreateSubjectDto): string;
    findAll(params: QueryDto): Promise<any[]>;
    findOne(id: number): Promise<import("pg").QueryResult<any>>;
    update(id: number, updateSubjectDto: UpdateSubjectDto): string;
    remove(id: number): string;
}
