import { Inject, Injectable } from '@nestjs/common';
import { Pool } from 'pg';
import { QueryParamsService } from 'src/query-adder/query-params.service';
import { QueryDto } from 'src/query-adder/query.dto';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';

@Injectable()
export class TeachersService {
  constructor(
    @Inject('PG_CONNECTION') private conn: Pool,
    @Inject(QueryParamsService) private queryAdder: QueryParamsService,
  ) {}

  create(createTeacherDto: CreateTeacherDto) {
    return 'This action adds a new teacher';
  }

  async findAll(params: QueryDto) {
    const [query, values] = this.queryAdder.addQueryParams(
      'SELECT * FROM "Teacher"',
      params,
    );
    return (await this.conn.query(query, values)).rows;
  }

  findOne(id: number) {
    return this.conn.query('SELECT * FROM "Teacher" WHERE id = $1', [id]);
  }

  update(id: number, updateTeacherDto: UpdateTeacherDto) {
    return `This action updates a #${id} teacher`;
  }

  remove(id: number) {
    return `This action removes a #${id} teacher`;
  }
}
