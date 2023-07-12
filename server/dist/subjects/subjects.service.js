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
const query_params_service_1 = require("../query-adder/query-params.service");
const pg_1 = require("pg");
let SubjectsService = class SubjectsService {
    constructor(conn, queryAdder) {
        this.conn = conn;
        this.queryAdder = queryAdder;
    }
    create(createSubjectDto) {
        return 'This action adds a new subject';
    }
    async findAll(params) {
        const [query, values] = this.queryAdder.addQueryParams('SELECT * FROM "Subject"', params);
        return (await this.conn.query(query, values)).rows;
    }
    findOne(id) {
        return this.conn.query('SELECT * FROM "Subject" WHERE id = $1', [id]);
    }
    update(id, updateSubjectDto) {
        return `This action updates a #${id} subject`;
    }
    remove(id) {
        return `This action removes a #${id} subject`;
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