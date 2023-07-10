import { Inject, Injectable } from '@nestjs/common';
import { Pool } from 'pg';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';

@Injectable()
export class DepartmentsService {
  constructor(@Inject('PG_CONNECTION') private conn: Pool) {}

  async create(createDepartmentDto: CreateDepartmentDto) {
    return this.conn
      .query(
        'INSERT INTO "Department" (name, code) VALUES ($1, $2) RETURNING *;',
        [createDepartmentDto.name, createDepartmentDto.code],
      )
      .then((res) => res.rows[0]);
  }

  async findAll() {
    return (await this.conn.query('SELECT * FROM "Department" LIMIT 5;')).rows;
  }

  findOne(id: number) {
    return `This action returns a #${id} department`;
  }

  update(id: number, updateDepartmentDto: UpdateDepartmentDto) {
    return `This action updates a #${id} department`;
  }

  remove(id: number) {
    return `This action removes a #${id} department`;
  }
}
