"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryParamsService = void 0;
const common_1 = require("@nestjs/common");
let QueryParamsService = class QueryParamsService {
    addQueryParams(query, page, pageSize, search) {
        page = page || 1;
        pageSize = pageSize || 10;
        const values = [];
        if (search) {
            query += `WHERE name ILIKE $1`;
            values.push(`%${search}%`);
        }
        const valuePosition = values.length + 1;
        query += `
    LIMIT $${valuePosition}
    OFFSET (($${valuePosition + 1} - 1) * $${valuePosition})
    `;
        values.push(pageSize);
        values.push(page);
        return [query, values];
    }
};
QueryParamsService = __decorate([
    (0, common_1.Injectable)()
], QueryParamsService);
exports.QueryParamsService = QueryParamsService;
//# sourceMappingURL=paginator.service.js.map