import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { TeachersService } from './teachers.service';
import { QueryDto } from 'src/query-adder/query.dto';
export declare class TeachersController {
    private readonly teachersService;
    constructor(teachersService: TeachersService);
    create(createTeacherDto: CreateTeacherDto): Promise<any>;
    findAll(query: QueryDto): Promise<any[]>;
    findOne(id: string): Promise<any>;
    update(id: string, updateTeacherDto: UpdateTeacherDto): Promise<any>;
    remove(id: string): Promise<import("pg").QueryResult<any>>;
}
