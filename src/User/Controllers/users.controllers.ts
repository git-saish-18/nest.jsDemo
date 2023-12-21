import { Controller, Get, Head, Param, Post, Query, Req, Res, Headers, Body, Inject } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Request, Response } from "express";

interface Profiledata {
    Name: string,
    id: number
}


// we can validate the configure file with proper datatypes 
interface JWT_Validation {
    "JWT_SECREATE_KEY": string;
    "JWT_EXPIRED_TIME": string;
    "IsAuth": {
        "flag": boolean
    }
}

@Controller("/")
export class UserController {

    constructor(@Inject("MaiIds") private MailIds: Record<string, any>, private Configservice: ConfigService<JWT_Validation>) {
        // console.log("port number", this.Configservice.get('PORT_NO'))

        // Access the data from config files 
        const JWT = this.Configservice.get<JWT_Validation>("JWT_SECREATE_KEY")
        const des = this.Configservice.get("IsAuth")
        console.log("JWT_config", JWT, des.flag)
    }

    @Get("/getprofile")
    getProfile(@Req() req: Request): string {
        const name = req.body.Name;
        console.log(this.MailIds)
        return `I am Profile Endpoint ${name}`
    }
    @Post("/addprofile")
    addprofile(@Req() req: Request): object {
        const name = req.body.Name;
        const user = ["saish", "onkar", "Teju"]
        user.push(name)
        return user
    }

    // redirect dynamically
    @Get("/DynamicRedirect")
    dynamicRedirect(@Req() req: Request, @Res() res: Response) {
        if (req.body.redirecturl === "login") {
            return res.redirect(302, 'http://localhost:3000/users/login');
        } else {
            return res.redirect(302, 'http://localhost:3000/users/signup');
        }
    }

    @Get('/login')
    login() {
        return "redirect to login endpoint";
    }

    @Get('/signup')
    signup() {
        return "redirect to signup endpoint";
    }


    //  Route Parameters  

    @Post("/findprofile/:name/:id")
    findProfile(@Param() Params: Record<string, any>) {
        console.log(Params)

        return Params;
    }
    @Post("/findprofilebyid/:name/:id")
    findProfilebyID(@Param('id') id: number) {
        console.log(id)

        return id;
    }

    //  Query Parameters  

    @Post("/getProfileQuery")
    getProfileQuery(@Query() Querydata: Record<string, any>) {
        console.log(Querydata)
        return Querydata;
    }

    @Post("/getProfilebyID")
    getProfilebyID(@Query('name') name: string) {
        console.log(name)
        return name;
    }

    // Request headers

    @Post("/deleteuser")
    deleteuser(@Headers() Headers: string) {
        return Headers;
    }

    // Request Body

    @Post("/getuserdata")
    getDataFromBody(@Body() requestdata: Profiledata) {
        console.log(requestdata.Name, requestdata.id)
        return requestdata;
    }
    // @Post("/getuserdata")
    // getDataFromBody(@Body() requestdata: Record<string, any>) {
    //     console.log(requestdata)
    //     return requestdata;
    // }


}