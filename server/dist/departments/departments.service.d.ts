import { Pool } from 'pg';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
export declare class DepartmentsService {
    private conn;
    constructor(conn: Pool);
    create(createDepartmentDto: CreateDepartmentDto): Promise<any>;
    findAll(): Promise<any[]>;
    findOne(id: number): string;
    update(id: number, updateDepartmentDto: UpdateDepartmentDto): string;
    remove(id: number): string;
}
