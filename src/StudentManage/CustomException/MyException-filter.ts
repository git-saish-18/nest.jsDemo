import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus, Res } from "@nestjs/common";
import { MyException } from "./MyException";
import { Response } from "express";

@Catch(MyException)
export class MyExceptionFilter implements ExceptionFilter {
    catch(exception: MyException, host: ArgumentsHost) {
        const ExceptionBody = {
            msg: exception.message,
            error: "Id not found",
            timestamp: new Date().toISOString()
        }

        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();

        response.status(HttpStatus.NOT_FOUND).json(ExceptionBody);

    }
}