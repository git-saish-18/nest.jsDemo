import { Body, Controller, Delete, Get, HttpStatus, Inject, Param, ParseIntPipe, Post, Put, UsePipes } from "@nestjs/common";
import { EmployeeDTO } from "../dto/Employee.dto";
import { EmployeeService } from "../service/employee.service"
import { ConfigService } from "@nestjs/config";
@Controller('/')
export class ServiceDemo {

    // injecting dependency --> constructor injection
    constructor(private EmployeeService: EmployeeService, private ConfigService: ConfigService) {
        console.log("Access albums config in employee module", this.ConfigService.get('DataBaseAlbum'))
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

    // @UsePipes(ParseIntPipe)  //convert string into number
    @Put('/updateEmp/:id')
    updateEmp(@Param("id", ParseIntPipe) id: number, @Body() requestBody: EmployeeDTO) {
        console.log(typeof id)
        return this.EmployeeService.updateEmp(+id, requestBody);
    };
    @Delete('/deleteEmp/:id')
    // ParseIntPipe use for data transformation  and validation convert any datatypes to number
    // deleteEmp(@Param('id', ParseIntPipe) id: number) {
    //     console.log(typeof id)
    //     return this.EmployeeService.deleteEmp(id);
    // };
    deleteEmp(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number) {
        console.log(typeof id)
        return this.EmployeeService.deleteEmp(id);
    };
}