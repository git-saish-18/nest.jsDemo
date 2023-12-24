import { ArgumentsHost, CallHandler, Catch, ExecutionContext, HttpException, NestInterceptor, NotFoundException } from "@nestjs/common";
import { isInstance } from "class-validator";
import { Request } from "express";
import { catchError, tap, throwError } from "rxjs";

export class EmployeeInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler) {
        const ctx = context.switchToHttp()
        const req = ctx.getRequest<Request>();
        // console.log(req.body)
        return next.handle().pipe(tap(() => {
            console.log("interceptor called end game"),
                catchError((err) =>
                    throwError(() => { console.log(err) }))
        }))
    }
}