import { Module } from '@nestjs/common';
import { TeachersController } from './teachers.controller';
import { TeachersService } from './teachers.service';
import { QueryParamsService } from 'src/query-adder/query-params.service';

@Module({
  imports: [],
  controllers: [TeachersController],
  providers: [TeachersService, QueryParamsService],
})
export class TeachersModule {}
