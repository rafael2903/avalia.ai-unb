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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const pg_1 = require("pg");
const auth_service_1 = require("../auth/auth.service");
const query_params_service_1 = require("../query-adder/query-params.service");
let UsersService = class UsersService {
    constructor(conn, queryAdder, authService) {
        this.conn = conn;
        this.queryAdder = queryAdder;
        this.authService = authService;
    }
    create(createUserDto) {
        return this.conn
            .query(`INSERT INTO "User" (id, name, course, email, password)
        VALUES ($1, $2, $3, $4, $5);`, [
            createUserDto.id,
            createUserDto.name,
            createUserDto.course,
            createUserDto.email,
            createUserDto.password,
        ])
            .then(() => {
            return this.authService.login({
                id: createUserDto.id,
                password: createUserDto.password,
            });
        });
    }
    findAll(params) {
        const [query, values] = this.queryAdder.addQueryParams('SELECT id, name, course, email, is_admin FROM "User"', params);
        return this.conn.query(query, values).then((res) => res.rows);
    }
    findOne(id) {
        return this.conn
            .query(`SELECT id, name, course, email, is_admin FROM "User" WHERE id = $1`, [id])
            .then((res) => res.rows[0]);
    }
    update(id, updateUserDto) {
        const values = [id, updateUserDto.name, updateUserDto.course];
        let query = `
      UPDATE "User"
      SET name = $2, course = $3`;
        if (updateUserDto.password) {
            query += `, password = $4`;
            values.push(updateUserDto.password);
        }
        query += ` WHERE id = $1
    RETURNING id, name, course, email, is_admin; `;
        return this.conn.query(query, values).then((res) => res.rows[0]);
    }
    remove(id) {
        this.conn.query(`DELETE FROM "User" WHERE id = $1`, [id]);
        return `User ${id} deleted`;
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('PG_CONNECTION')),
    __param(1, (0, common_1.Inject)(query_params_service_1.QueryParamsService)),
    __param(2, (0, common_1.Inject)(auth_service_1.AuthService)),
    __metadata("design:paramtypes", [pg_1.Pool,
        query_params_service_1.QueryParamsService,
        auth_service_1.AuthService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map