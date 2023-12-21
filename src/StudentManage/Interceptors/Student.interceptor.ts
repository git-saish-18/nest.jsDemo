import { CallHandler, ExecutionContext, Injectable, NestInterceptor, RequestTimeoutException, ServiceUnavailableException } from "@nestjs/common";
import { Request, Response } from "express";
import { writeFile } from "fs/promises";
import { join } from "path";
import { TimeoutError, throwError } from "rxjs";
import { catchError, tap, timeout } from "rxjs/operators";
@Injectable()
export class StudentInterceptor implements NestInterceptor {
    private Catche = []

    intercept(context: ExecutionContext, next: CallHandler) {

        const ctx = context.switchToHttp();
        const req = ctx.getRequest<Request>();
        const res = ctx.getResponse<Response>();
        // const body = req.body;
        let bodymsg = {
            method: req.method,
            path: req.path,
            timestamp: new Date().toISOString(),
            statusCode:res.statusCode,
        }
        // this.writeFiles(bodymsg);
        req.body.saish = "EndGamers";
        console.log("Start Game changes REQ")
        console.log(req.body)
        this.Catche.push(req.body)
        // console.log(this.Catche)
        console.log(bodymsg)
        return next.handle().pipe(
            timeout(4000),
            tap(() => { console.log("End Game") }),
            catchError((err) => {
                if (err instanceof TimeoutError) {
                    return throwError(() => new RequestTimeoutException())
                }
                else {

                    return throwError(() => res.send(JSON.stringify(err)))
                }
            })
        )
    }
    // private async writeFiles(body: any) {

    //     const LOG_DIR = join(__dirname, `ErrorLogFIle-log.json`)
    //     try {
    //         console.log("yes dude")
    //         await writeFile(LOG_DIR, JSON.stringify(body));
    //         console.log("No dude")

    //     } catch (error) {
    //         return;
    //     }
    // }

}
