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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const pg_1 = require("pg");
let AuthService = class AuthService {
    constructor(conn) {
        this.conn = conn;
    }
    async login(loginDto) {
        let query = `SELECT id, password, name, course, email, is_admin FROM "User" WHERE `;
        let values = [];
        if ('id' in loginDto) {
            query += 'id = $1';
            values = [loginDto.id];
        }
        else {
            query += 'email = $1';
            values = [loginDto.email];
        }
        const { rows } = await this.conn.query(query, values);
        if (rows.length === 0) {
            throw new common_1.NotFoundException('Usuário não encontrado');
        }
        const _a = rows[0], { password } = _a, userData = __rest(_a, ["password"]);
        if (password !== loginDto.password) {
            throw new common_1.UnauthorizedException('Senha incorreta');
        }
        query = `INSERT INTO "Authentication" (user_id) VALUES ($1) RETURNING token`;
        values = [rows[0].id];
        const token = (await this.conn.query(query, values)).rows[0].token;
        return Object.assign({ token }, userData);
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('PG_CONNECTION')),
    __metadata("design:paramtypes", [pg_1.Pool])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map