import { Injectable, Inject } from '@nestjs/common';
import { Pool } from 'pg';

@Injectable()
export class AppService {
  constructor(@Inject('PG_CONNECTION') private conn: Pool) {}

  async getHello() {
    return this.conn.query('SELECT NOW()').then((res) => res.rows[0].now);
  }
}
