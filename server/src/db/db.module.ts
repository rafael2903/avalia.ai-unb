import { Global, Module } from '@nestjs/common';
import { Pool } from 'pg';

const dbProvider = {
  provide: 'PG_CONNECTION',
  useValue: new Pool({
    user: 'postgres',
    host: process.env.DB_HOST,
    database: 'avalia_ai',
    password: 'postgres',
    port: parseInt(process.env.DB_PORT),
  }),
};

@Global()
@Module({
  providers: [dbProvider],
  exports: [dbProvider],
})
export class DBModule {}
