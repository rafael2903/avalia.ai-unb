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
    const { id, name, department_code } = createTeacherDto;

    const query = `
      INSERT INTO "Teacher" (id, name, department_code)
      VALUES ($1, $2, $3)
      RETURNING *
    `;
    const values = [id, name, department_code];

    return this.conn.query(query, values).then((res) => res.rows[0]);
  }

  async findAll(params: QueryDto) {
    const [query, values] = this.queryAdder.addQueryParams(
      'SELECT * FROM "TeacherView"',
      params,
    );
    return (await this.conn.query(query, values)).rows;
  }

  async findOne(id: number) {
    const teacher = await this.conn
      .query('SELECT * FROM "Teacher" WHERE id = $1', [id])
      .then((res) => res.rows[0]);

    const subjectsQuery = `
      SELECT name, code
      FROM "Subject"
      LEFT JOIN "Class"
      ON "Subject".code = "Class".subject_code
      WHERE "Class".teacher_id = $1;`;

    const { rows: subjects } = await this.conn.query(subjectsQuery, [id]);

    return { ...teacher, subjects };
  }

  update(id: number, updateTeacherDto: UpdateTeacherDto) {
    const { id: newId, name, department_code } = updateTeacherDto;

    const query = `
      UPDATE "Teacher"
      SET id = $1, name = $2, department_code = $3
      WHERE id = $4
      RETURNING *
    `;
    const values = [newId, name, department_code, id];

    return this.conn.query(query, values).then((res) => res.rows[0]);
  }

  remove(id: number) {
    return this.conn.query('DELETE FROM "Teacher" WHERE id = $1', [id]);
  }
}
