import { QueryDto } from 'src/query-adder/query.dto';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { SubjectsService } from './subjects.service';
export declare class SubjectsController {
    private readonly subjectsService;
    constructor(subjectsService: SubjectsService);
    create(createSubjectDto: CreateSubjectDto): string;
    findAll(query: QueryDto): Promise<any[]>;
    findOne(id: string): Promise<import("pg").QueryResult<any>>;
    update(id: string, updateSubjectDto: UpdateSubjectDto): string;
    remove(id: string): string;
}
