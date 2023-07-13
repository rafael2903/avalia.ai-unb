import { Global, Module } from '@nestjs/common';
import { Pool } from 'pg';

const dbProvider = {
  provide: 'PG_CONNECTION',
  useValue: new Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: parseInt(process.env.PGPORT),
  }),
};

@Global()
@Module({
  providers: [dbProvider],
  exports: [dbProvider],
})
export class DBModule {}
