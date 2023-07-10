import { Inject, Injectable } from '@nestjs/common';
import { Pool } from 'pg';
import { QueryParamsService } from 'src/query-adder/query-params.service';
import { QueryDto } from 'src/query-adder/query.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @Inject('PG_CONNECTION') private conn: Pool,
    @Inject(QueryParamsService) private queryAdder: QueryParamsService,
  ) {}

  create(createUserDto: CreateUserDto) {
    return this.conn
      .query(
        `INSERT INTO "User" (id, name, course, email, password)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING id, name, course, email, is_admin;`,
        [
          createUserDto.id,
          createUserDto.name,
          createUserDto.course,
          createUserDto.email,
          createUserDto.password,
        ],
      )
      .then((res) => res.rows[0]);
  }

  findAll(params: QueryDto) {
    const [query, values] = this.queryAdder.addQueryParams(
      'SELECT id, name, course, email, is_admin FROM "User"',
      params,
    );

    return this.conn.query(query, values).then((res) => res.rows);
  }

  findOne(id: number) {
    return this.conn
      .query(
        `SELECT id, name, course, email, is_admin FROM "User" WHERE id = $1`,
        [id],
      )
      .then((res) => res.rows[0]);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const values = [id, updateUserDto.name, updateUserDto.course];

    let query = `
      UPDATE "User"
      SET name = $2, course = $3`;

    if (updateUserDto.password) {
      query += `, password = $4`;
      values.push(updateUserDto.password);
    }

    query += ` WHERE id = $1
    RETURNING id, name, course, email, is_admin; `;

    return this.conn.query(query, values).then((res) => res.rows[0]);
  }

  remove(id: number) {
    this.conn.query(`DELETE FROM "User" WHERE id = $1`, [id]);
    return `User ${id} deleted`;
  }
}
