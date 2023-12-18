import { Controller, Get, Head, Param, Post, Query, Req, Res, Headers, Body } from "@nestjs/common";
import { Request, Response } from "express";

interface Profiledata {
    Name: string,
    id: number
}


@Controller("/users")
export class UserController {


    @Get("/getprofile")
    getProfile(@Req() req: Request): string {
        const name = req.body.Name;
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