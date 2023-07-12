import { Inject, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { Pool } from 'pg';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(@Inject('PG_CONNECTION') private conn: Pool) {}

  async login(loginDto: LoginDto) {
    let query = `SELECT id, password, name, course, email, is_admin FROM "User" WHERE `;
    let values = [];

    if ('id' in loginDto) {
      query += 'id = $1';
      values = [loginDto.id];
    } else {
      query += 'email = $1';
      values = [loginDto.email];
    }

    const { rows } = await this.conn.query(query, values);

    if (rows.length === 0) {
      throw new NotFoundException('Usuário não encontrado');
    }

    const { password, ...userData } = rows[0];

    if (password !== loginDto.password) {
      throw new UnauthorizedException('Senha incorreta');
    }

    query = `INSERT INTO "Authentication" (user_id) VALUES ($1) RETURNING token`;
    values = [rows[0].id];

    const token: string = (await this.conn.query(query, values)).rows[0].token;

    return { token, ...userData };
  }
}
