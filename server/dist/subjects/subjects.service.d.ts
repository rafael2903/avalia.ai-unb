import { Pool } from 'pg';
import { QueryParamsService } from 'src/query-adder/query-params.service';
import { QueryDto } from 'src/query-adder/query.dto';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
export declare class SubjectsService {
    private conn;
    private queryAdder;
    constructor(conn: Pool, queryAdder: QueryParamsService);
    create(createSubjectDto: CreateSubjectDto): Promise<any>;
    findAll(params: QueryDto): Promise<any[]>;
    findOne(code: string): Promise<any>;
    update(code: string, updateSubjectDto: UpdateSubjectDto): Promise<any>;
    remove(code: string): {
        message: string;
    };
}
