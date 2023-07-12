import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ClassesModule } from './classes/classes.module';
import { CommentsModule } from './comments/comments.module';
import { DBModule } from './db/db.module';
import { DepartmentsModule } from './departments/departments.module';
import { LoggerMiddleware } from './logger/logger.middleware';
import { ReportsModule } from './reports/reports.module';
import { SubjectsModule } from './subjects/subjects.module';
import { TeachersModule } from './teachers/teachers.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    DBModule,
    ConfigModule.forRoot(),
    UsersModule,
    TeachersModule,
    DepartmentsModule,
    SubjectsModule,
    ClassesModule,
    CommentsModule,
    ReportsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}