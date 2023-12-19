import { Body, Controller, Delete, Get, Inject, Param, Post, Put } from "@nestjs/common";
import { EmployeeDTO } from "../dto/Employee.dto";
import { EmployeeService } from "../service/employee.service"
@Controller('/employeeSection')
export class ServiceDemo {

    // injecting dependency --> constructor injection
    constructor(private EmployeeService: EmployeeService) {
        console.log(this.EmployeeService)
    }
    // @Inject("EmployeeService")   //--> property injection
    // private EmployeeService: EmployeeService;

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