import { Inject, Injectable } from '@nestjs/common';
import { Pool } from 'pg';
import { QueryParamsService } from 'src/query-adder/query-params.service';
import { QueryDto } from 'src/query-adder/query.dto';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';

@Injectable()
export class SubjectsService {
  constructor(
    @Inject('PG_CONNECTION') private conn: Pool,
    @Inject(QueryParamsService) private queryAdder: QueryParamsService,
  ) {}

  create(createSubjectDto: CreateSubjectDto) {
    const { code, name, department_code } = createSubjectDto;

    const query = `
      INSERT INTO "Subject" (code, name, department_code)
      VALUES ($1, $2, $3)
      RETURNING *
    `;
    const values = [code, name, department_code];

    return this.conn.query(query, values).then((res) => res.rows[0]);
  }

  async findAll(params: QueryDto) {
    const [query, values] = this.queryAdder.addQueryParams(
      'SELECT * FROM "SubjectView"',
      params,
    );
    return (await this.conn.query(query, values)).rows;
  }

  async findOne(code: string) {
    const subject = await this.conn
      .query('SELECT * FROM "Subject" WHERE code = $1', [code])
      .then((res) => res.rows[0]);

    const teachersQuery = `
      SELECT name, "Teacher".id
      FROM "Teacher"
      LEFT JOIN "Class"
      ON "Teacher".id = "Class".teacher_id
      WHERE "Class".subject_code = $1;`;

    const { rows: teachers } = await this.conn.query(teachersQuery, [code]);

    return { ...subject, teachers };
  }

  update(code: string, updateSubjectDto: UpdateSubjectDto) {
    const { code: newCode, name, department_code } = updateSubjectDto;

    const query = `
      UPDATE "Subject"
      SET code = $1, name = $2, department_code = $3
      WHERE code = $4
      RETURNING *
    `;
    const values = [newCode, name, department_code, code];

    return this.conn.query(query, values).then((res) => res.rows[0]);
  }

  remove(code: string) {
    this.conn.query('DELETE FROM "Subject" WHERE code = $1', [code]);
    return { message: `Subject ${code} deleted` };
  }
}
