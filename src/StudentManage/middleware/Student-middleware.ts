import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

export async function StudentMiddleWare(req: Request, res: Response, next: NextFunction) {
    const ua = req.headers["user-agent"];
    console.log(ua);
    // res.json({ msd: "yes" })
    // if (ua === "saishthorat") {
    //     req["UA"] = ua
    //     next();
    //     return;
    // }
    // else {
    //     res.status(401).send("Not Not allowed");
    // }
    req["UA"] = ua
        next();
}

@Injectable()
export class StudentClassBasedMiddleWaare implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        console.log("class based middleware called ")
        next()
    }
}