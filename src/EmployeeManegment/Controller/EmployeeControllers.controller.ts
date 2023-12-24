import { Body, Controller, Get, NotFoundException, Post, UseInterceptors, ValidationPipe } from "@nestjs/common";
import { EmployeeService } from "../Service/Employee.service";
import { EmployeeDto } from "../dto/Employee.dto";
import { EmployeeInterceptor } from "../Interceptors/Employee.Interceptor";

@Controller('/')
@UseInterceptors(EmployeeInterceptor)
export class EmployeeController {

    constructor(private EmployeeService: EmployeeService) { }

    @Get("/getallemp")
    async getEmployee(): Promise<string> {
        // throw new NotFoundException()
        return await this.EmployeeService.getEmployee()
    }
    @Post('/addemp')
    async addEmployee(@Body() empdata: EmployeeDto): Promise<string> {
        return await this.EmployeeService.addEmployee(empdata)
    }
}