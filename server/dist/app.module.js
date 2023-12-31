"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const all_exceptions_filter_1 = require("./all-exceptions.filter");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./auth/auth.module");
const classes_module_1 = require("./classes/classes.module");
const comments_module_1 = require("./comments/comments.module");
const db_module_1 = require("./db/db.module");
const departments_module_1 = require("./departments/departments.module");
const logger_middleware_1 = require("./logger/logger.middleware");
const reports_module_1 = require("./reports/reports.module");
const subjects_module_1 = require("./subjects/subjects.module");
const teachers_module_1 = require("./teachers/teachers.module");
const users_module_1 = require("./users/users.module");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(logger_middleware_1.LoggerMiddleware).forRoutes('*');
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            db_module_1.DBModule,
            users_module_1.UsersModule,
            teachers_module_1.TeachersModule,
            departments_module_1.DepartmentsModule,
            subjects_module_1.SubjectsModule,
            classes_module_1.ClassesModule,
            comments_module_1.CommentsModule,
            reports_module_1.ReportsModule,
            auth_module_1.AuthModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            {
                provide: core_1.APP_FILTER,
                useClass: all_exceptions_filter_1.AllExceptionsFilter,
            },
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map