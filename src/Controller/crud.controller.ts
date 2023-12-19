import { Body, Controller, Post, Get, Delete, Param, Put, Ip } from "@nestjs/common";
import { UserDTO } from '../dto/index'
var userData = []
@Controller("/usersection")
export class CrudOperation {


    // Post method
    @Post('/addUser')
    addUser(@Body() requestData: UserDTO) {
        userData.push(requestData);
        console.log("new user added", requestData)
        return "user Created successfully";
    }

    // get method
    @Get('/getallUser')
    getAllUser() {
        console.log("alluser list ", userData)
        return userData;
    }

    // delete method
    @Delete('/deletuser/:id')
    deletuser(@Param('id') id: number) {

        userData = userData.filter((ele) => { return ele.id !== +id })
        return `user delete successfully of id ${id}`;
    }

    // find user method
    @Get('/getuser/:id')
    getuserbyid(@Param('id') id: number) {

        let user = userData.find(user => user.id === +id)
        console.log("find users ", user)
        return `user found ${id}`;
    }

    // update user method
    @Put('/updateuser/:id')
    updateuserbyid(@Param('id') id: number, @Body() updateuser: UserDTO) {
        let user = userData.find(user => user.id === +id)
        let useridx = userData.indexOf(user);
        userData[useridx] = updateuser;
        return `user found ${userData}`;
    }

    // getting Ip address
    @Get('getIp')
    getIP(@Ip() ip: String) {
        return ip;
    }

}