import { Module, OnModuleInit } from "@nestjs/common";
import { UserController } from "./Controllers/users.controllers";
import { ConfigModule, ConfigService } from "@nestjs/config";
@Module({
    // if env variable is not global true then we have to import configModule
    // imports: [ConfigModule],
    imports: [],
    providers: [{ provide: "MaiIds", useValue: ["saish@saish.com", "onkar@onkae.com"] }],
    controllers: [UserController],
    exports: []
})
export class UsersModule implements OnModuleInit {
    onModuleInit() {
        console.log("Users module initialized",process.env['PORT_NO'],)
    }
}