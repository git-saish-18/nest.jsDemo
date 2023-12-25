import { Module } from "@nestjs/common";
import { EmployeeController } from "./Controller/EmployeeControllers.controller";
import { EmployeeService } from "./Service/Employee.service";
import { RouterModule } from "@nestjs/core";
// import { PrismaService } from "prisma/PrismaService";
import { PrismModule } from "prisma/Prisma.module";
import { JwtModule } from "@nestjs/jwt";

@Module({
    imports: [RouterModule.register([{ path: "/employee", module: EmployeeModule }]), PrismModule, JwtModule.register({
        secret: "saish",
        signOptions: { expiresIn: '1h' },
    })],
    controllers: [EmployeeController],
    exports: [JwtModule],
    providers: [EmployeeService]
})
export class EmployeeModule {
}