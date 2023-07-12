import { NestMiddleware } from '@nestjs/common';
export declare class LoggerMiddlewareMiddleware implements NestMiddleware {
    use(req: any, res: any, next: () => void): void;
}
