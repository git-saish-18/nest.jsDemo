import { Module, OnModuleInit } from "@nestjs/common";
import { UserController } from "./Controllers/users.controllers";
@Module({
    imports: [],
    providers: [{ provide: "MaiIds", useValue: ["saish@saish.com", "onkar@onkae.com"] }],
    controllers: [UserController],
    exports: []
})
export class UsersModule implements OnModuleInit {
    onModuleInit() {
        console.log("Users module initialized")
    }
}