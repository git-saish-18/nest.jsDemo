import { Module } from "@nestjs/common";
import { EmployeeController } from "./Controller/EmployeeControllers.controller";
import { EmployeeService } from "./Service/Employee.service";
import { RouterModule } from "@nestjs/core";
import { PrismaService } from "prisma/PrismaService";
 
@Module({
    imports: [RouterModule.register([{ path: "/employee", module: EmployeeModule }])],
    controllers: [EmployeeController],
    exports: [],
    providers: [EmployeeService,PrismaService]
})
export class EmployeeModule {
}