import { Body, Controller, Post, Get, Delete, Param, Put, Ip, Inject } from "@nestjs/common";
import { UserDTO } from '../dto/index'
import { CrudOperationService } from "../Service/CrudOperation.service";
var userData = []
@Controller("/usersection")
export class CrudOperation {



    constructor(@Inject('Db_Name') private dbName: string, private CrudOperationService: CrudOperationService) {
        console.log(this.dbName)
    }

    // Post method
    @Post('/addUser')
    addUser(@Body() requestData: UserDTO) {
        return this.CrudOperationService.addUser(requestData);
    }

    // get method
    @Get('/getallUser')
    getAllUser() {
        return this.CrudOperationService.getAllUser();
    }

    // delete method
    @Delete('/deletuser/:id')
    deletUser(@Param('id') id: number) {
        return this.CrudOperationService.deleteUser(id);
    }

    // find user method
    @Get('/getuser/:id')
    getuserbyid(@Param('id') id: number) {

        return this.CrudOperationService.getuserbyId(id);
    }

    // update user method
    @Put('/updateuser/:id')
    updateuserbyid(@Param('id') id: number, @Body() updateuser: UserDTO) {
        return this.CrudOperationService.updateUserById(id, updateuser);
    }

    // getting Ip address
    @Get('getIp')
    getIP(@Ip() ip: String) {
        return ip;
    }

}