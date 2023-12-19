import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { EmployeeDTO } from "../dto/Employee.dto";
import { EmployeeService } from '../Services/employee.service'
@Controller('/employeeSection')
export class ServiceDemo {

    constructor(private EmployeeService: EmployeeService) { }

    @Get('/getEmp')
    getUser() {
        return this.EmployeeService.getUser();
    };
    @Post('/addEmp')
    addEmp(@Body() requestBody: EmployeeDTO) {
        return this.EmployeeService.addEmp(requestBody);
    };
    @Put('/updateEmp/:id')
    updateEmp(@Param("id") id: number, @Body() requestBody: EmployeeDTO) {
        return this.EmployeeService.updateEmp(+id, requestBody);
    };
    @Delete('/deleteEmp/:id')
    deleteEmp(@Param('id') id: number) {
        return this.EmployeeService.deleteEmp(+id);
    };
}