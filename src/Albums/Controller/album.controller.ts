import { Controller, Delete, Get, HttpCode, HttpStatus, Post, Put, Res, Header, Redirect, Inject } from "@nestjs/common";
import { Response } from "express";

@Controller("/")
export class AlbumController {

    constructor(@Inject("albumObj") private albumObj: object, @Inject('DbConnection') private connect: any) { }

    @Get()
    getAlbums(): string {
        console.log(this.albumObj)
        console.log(this.connect)
        return "Get all albums"
    }
    @HttpCode(204)
    @Get("A*B")
    getAllAStarB(): string {
        return "Get all A*B"
    }
    @HttpCode(HttpStatus.ACCEPTED)
    @Post("addalbums")
    addAlbum(): string {
        return " Add Albums "
    }
    @HttpCode(HttpStatus.ACCEPTED)
    @Delete('/deletealbum')
    deleteAlbum(@Res() Res: Response) {
        Res.status(202).send("Deleted Succesfully")
    }
    @HttpCode(HttpStatus.ACCEPTED)
    @Header("Content-Type", "application/json")
    @Header("x-Name", "saish")
    @Post('/updatealbum')
    @Redirect("/albums/redirectMe")
    update(@Res({ passthrough: true }) Res: Response) {
        return "update Succesfully"


    }

    @Post('/redirectMe')
    redirectMe() {
        return "redirect Successfully"
    }
}