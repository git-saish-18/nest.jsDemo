import { Module } from "@nestjs/common";
import { UserController } from "./Controllers/users.controllers";
@Module({
    imports: [],
    providers: [{ provide: "MaiIds", useValue: ["saish@saish.com", "onkar@onkae.com"] }],
    controllers: [UserController],
    exports: []
})
export class UsersModule { }