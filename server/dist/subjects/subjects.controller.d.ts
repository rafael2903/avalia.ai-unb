import { QueryDto } from 'src/query-adder/query.dto';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { SubjectsService } from './subjects.service';
export declare class SubjectsController {
    private readonly subjectsService;
    constructor(subjectsService: SubjectsService);
    create(createSubjectDto: CreateSubjectDto): Promise<any>;
    findAll(query: QueryDto): Promise<any[]>;
    findOne(code: string): Promise<any>;
    update(code: string, updateSubjectDto: UpdateSubjectDto): Promise<any>;
    remove(code: string): {
        message: string;
    };
}
