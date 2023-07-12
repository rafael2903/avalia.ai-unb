import { Inject, Injectable } from '@nestjs/common';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { QueryParamsService } from 'src/query-adder/query-params.service';
import { Pool } from 'pg';
import { QueryDto } from 'src/query-adder/query.dto';

@Injectable()
export class SubjectsService {
  constructor(
    @Inject('PG_CONNECTION') private conn: Pool,
    @Inject(QueryParamsService) private queryAdder: QueryParamsService,
  ) {}

  create(createSubjectDto: CreateSubjectDto) {
    return 'This action adds a new subject';
  }

  async findAll(params: QueryDto) {
    const [query, values] = this.queryAdder.addQueryParams(
      'SELECT * FROM "Subject"',
      params,
    );
    return (await this.conn.query(query, values)).rows;
  }

  findOne(id: number) {
    return this.conn.query('SELECT * FROM "Subject" WHERE id = $1', [id]);
  }

  update(id: number, updateSubjectDto: UpdateSubjectDto) {
    return `This action updates a #${id} subject`;
  }

  remove(id: number) {
    return `This action removes a #${id} subject`;
  }
}
