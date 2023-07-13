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
exports.SubjectsService = void 0;
const common_1 = require("@nestjs/common");
const pg_1 = require("pg");
const query_params_service_1 = require("../query-adder/query-params.service");
let SubjectsService = class SubjectsService {
    constructor(conn, queryAdder) {
        this.conn = conn;
        this.queryAdder = queryAdder;
    }
    create(createSubjectDto) {
        const { code, name, department_code } = createSubjectDto;
        const query = `
      INSERT INTO "Subject" (code, name, department_code)
      VALUES ($1, $2, $3)
      RETURNING *
    `;
        const values = [code, name, department_code];
        return this.conn.query(query, values).then((res) => res.rows[0]);
    }
    async findAll(params) {
        const [query, values] = this.queryAdder.addQueryParams('SELECT * FROM "SubjectView"', params);
        return (await this.conn.query(query, values)).rows;
    }
    async findOne(code) {
        const subject = await this.conn
            .query('SELECT * FROM "Subject" WHERE code = $1', [code])
            .then((res) => res.rows[0]);
        const teachersQuery = `
      SELECT name, "Teacher".id
      FROM "Teacher"
      LEFT JOIN "Class"
      ON "Teacher".id = "Class".teacher_id
      WHERE "Class".subject_code = $1;`;
        const { rows: teachers } = await this.conn.query(teachersQuery, [code]);
        return Object.assign(Object.assign({}, subject), { teachers });
    }
    update(code, updateSubjectDto) {
        const { code: newCode, name, department_code } = updateSubjectDto;
        const query = `
      UPDATE "Subject"
      SET code = $1, name = $2, department_code = $3
      WHERE code = $4
      RETURNING *
    `;
        const values = [newCode, name, department_code, code];
        return this.conn.query(query, values).then((res) => res.rows[0]);
    }
    remove(code) {
        this.conn.query('DELETE FROM "Subject" WHERE code = $1', [code]);
        return { message: `Subject ${code} deleted` };
    }
};
SubjectsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('PG_CONNECTION')),
    __param(1, (0, common_1.Inject)(query_params_service_1.QueryParamsService)),
    __metadata("design:paramtypes", [pg_1.Pool,
        query_params_service_1.QueryParamsService])
], SubjectsService);
exports.SubjectsService = SubjectsService;
//# sourceMappingURL=subjects.service.js.map