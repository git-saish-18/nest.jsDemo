import { Module } from "@nestjs/common";
import { EmployeeController } from "./Controller/EmployeeControllers.controller";
import { EmployeeService } from "./Service/Employee.service";
import { RouterModule } from "@nestjs/core";
// import { PrismaService } from "prisma/PrismaService";
import { PrismModule } from "prisma/Prisma.module";

@Module({
    imports: [RouterModule.register([{ path: "/employee", module: EmployeeModule }]), PrismModule],
    controllers: [EmployeeController],
    exports: [],
    providers: [EmployeeService]
})
export class EmployeeModule {
}