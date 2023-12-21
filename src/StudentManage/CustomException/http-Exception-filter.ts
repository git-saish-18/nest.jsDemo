import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from "@nestjs/common";
import { Response, Request } from 'express';
import { writeFile } from "fs/promises";
import { join } from "path";
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    private Logs = [];
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const res = ctx.getResponse<Response>();
        const req = ctx.getRequest<Request>();

        const body = {
            statusCode: exception.getStatus(),
            error: exception.message,
            method: req.method,
            path: req.path,
            timestamp: new Date().toISOString()
        }
        this.CreatLogFile(body);
        res.status(HttpStatus.NOT_FOUND).json(body);
    }
    private async CreatLogFile(data: any) {
        const LOG_DIR = join(__dirname, `AlltypesOfException-log.json`);

        try {
            this.Logs.push(data)
            await writeFile(LOG_DIR, JSON.stringify(this.Logs));
        } catch (error) {
            return;
        }
    }
}