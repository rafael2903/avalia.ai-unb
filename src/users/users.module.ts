import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { QueryParamsService } from 'src/query-adder/query-params.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, QueryParamsService],
})
export class UsersModule {}
