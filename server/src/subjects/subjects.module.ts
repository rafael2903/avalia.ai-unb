import { Module } from '@nestjs/common';
import { SubjectsService } from './subjects.service';
import { SubjectsController } from './subjects.controller';
import { QueryParamsService } from 'src/query-adder/query-params.service';

@Module({
  controllers: [SubjectsController],
  providers: [SubjectsService, QueryParamsService],
})
export class SubjectsModule {}
