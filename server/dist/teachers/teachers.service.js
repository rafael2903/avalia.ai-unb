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
exports.TeachersService = void 0;
const common_1 = require("@nestjs/common");
const pg_1 = require("pg");
const query_params_service_1 = require("../query-adder/query-params.service");
let TeachersService = class TeachersService {
    constructor(conn, queryAdder) {
        this.conn = conn;
        this.queryAdder = queryAdder;
    }
    create(createTeacherDto) {
        const { id, name, department_code } = createTeacherDto;
        const query = `
      INSERT INTO "Teacher" (id, name, department_code)
      VALUES ($1, $2, $3)
      RETURNING *
    `;
        const values = [id, name, department_code];
        return this.conn.query(query, values).then((res) => res.rows[0]);
    }
    async findAll(params) {
        const [query, values] = this.queryAdder.addQueryParams('SELECT * FROM "TeacherView"', params);
        return (await this.conn.query(query, values)).rows;
    }
    async findOne(id) {
        const teacher = await this.conn
            .query('SELECT * FROM "Teacher" WHERE id = $1', [id])
            .then((res) => res.rows[0]);
        const subjectsQuery = `
      SELECT name, code
      FROM "Subject"
      LEFT JOIN "Class"
      ON "Subject".code = "Class".subject_code
      WHERE "Class".teacher_id = $1;`;
        const { rows: subjects } = await this.conn.query(subjectsQuery, [id]);
        return Object.assign(Object.assign({}, teacher), { subjects });
    }
    update(id, updateTeacherDto) {
        const { id: newId, name, department_code } = updateTeacherDto;
        const query = `
      UPDATE "Teacher"
      SET id = $1, name = $2, department_code = $3
      WHERE id = $4
      RETURNING *
    `;
        const values = [newId, name, department_code, id];
        return this.conn.query(query, values).then((res) => res.rows[0]);
    }
    remove(id) {
        return this.conn.query('DELETE FROM "Teacher" WHERE id = $1', [id]);
    }
};
TeachersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('PG_CONNECTION')),
    __param(1, (0, common_1.Inject)(query_params_service_1.QueryParamsService)),
    __metadata("design:paramtypes", [pg_1.Pool,
        query_params_service_1.QueryParamsService])
], TeachersService);
exports.TeachersService = TeachersService;
//# sourceMappingURL=teachers.service.js.map