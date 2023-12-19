import { Module } from "@nestjs/common";
import { ServiceDemo } from "./controller/serviceDemo.controller";
import { EmployeeService } from "./service/employee.service";

@Module({
    imports: [],
    exports: [],
    // registration of dependency injection in IOC ----> class as dependency
    providers: [EmployeeService],
    // providers: [{ provide: "EmployeeService", useClass: EmployeeService }],
    controllers: [ServiceDemo]
})
export class EmployeeModule { }