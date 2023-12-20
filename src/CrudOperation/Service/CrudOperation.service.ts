import { Delete, Get, Injectable, Post, Put } from "@nestjs/common";
import { UserDTO } from "../dto";
@Injectable()
export class CrudOperationService {
    private userData = []
    @Post()
    addUser(userdata: UserDTO) {
        this.userData.push(userdata);
        console.log("new user added", userdata)
        return `user Created successfully`;
    }
    @Get()
    getAllUser() {
        console.log("alluser list ", this.userData)
        return this.userData;
    }
    @Delete()
    deleteUser(id: number) {
        this.userData = this.userData.filter((ele) => { return ele.id !== +id })
        return `user delete successfully of id ${id}`;
    }
    @Get()
    getuserbyId(id: number) {
        let user = this.userData.find(user => user.id === +id)
        if (!user) {
            console.log("User not found")
            return `user ${id} not found `;
        } else {
            console.log("find users ", user)
            return `user ${id} found `;
        }

    }
    @Put()
    updateUserById(id: number, updateuser: object) {
        let user = this.userData.find(user => user.id === +id)
        let useridx = this.userData.indexOf(user);
        if (useridx < 0) {
            console.log("userid is not found")
            return `user Id ${useridx} is not found`
        }
        else {
            this.userData[useridx] = updateuser;
            return `user ${useridx} updated `;

        }
    }

}