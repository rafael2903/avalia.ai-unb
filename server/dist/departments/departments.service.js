"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartmentsService = void 0;
const common_1 = require("@nestjs/common");
const pg_1 = require("pg");
let DepartmentsService = class DepartmentsService {
    constructor(conn) {
        this.conn = conn;
    }
    async create(createDepartmentDto) {
        return this.conn
            .query('INSERT INTO "Department" (name, code) VALUES ($1, $2) RETURNING *;', [createDepartmentDto.name, createDepartmentDto.code])
            .then((res) => res.rows[0]);
    }
    async findAll() {
        return (await this.conn.query('SELECT * FROM "Department" LIMIT 5;')).rows;
    }
    findOne(id) {
        return `This action returns a #${id} department`;
    }
    update(id, updateDepartmentDto) {
        return `This action updates a #${id} department`;
    }
    remove(id) {
        return `This action removes a #${id} department`;
    }
};
DepartmentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('PG_CONNECTION')),
    __metadata("design:paramtypes", [pg_1.Pool])
], DepartmentsService);
exports.DepartmentsService = DepartmentsService;
//# sourceMappingURL=departments.service.js.map