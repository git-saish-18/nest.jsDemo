import {
    BadRequestException,
    Body,
    Controller,
    Delete,
    Get,
    NotFoundException,
    Param,
    ParseIntPipe,
    Post,
    Req,
    Res,
    UnauthorizedException,
    UseInterceptors,
    ValidationPipe,
} from '@nestjs/common';
import { EmployeeService } from '../Service/Employee.service';
import { EmployeeDto } from '../dto/Employee.dto';
import { EmployeeInterceptor } from '../Interceptors/Employee.Interceptor';
import { Request, Response } from 'express';

@Controller('/')
@UseInterceptors(EmployeeInterceptor)
export class EmployeeController {
    constructor(private EmployeeService: EmployeeService) { }

    @Get('/getallemp')
    async getEmployee(@Req() res:Request): Promise<any> {
        try {
            return await this.EmployeeService.getEmployee(res);
        } catch (error) {
            throw new NotFoundException();
        }
    }
    @Post('/addemp')
    async addEmployee(@Body(ValidationPipe) empdata: EmployeeDto): Promise<any> {
        try {
            return await this.EmployeeService.addEmployee(empdata);
        } catch (error) {
            throw new BadRequestException();
        }
    }

    @Get('/findEmpById/:Id')
    async getEmployeeById(@Param('Id', ParseIntPipe) Id: number): Promise<any> {
        try {
            return await this.EmployeeService.getEmployeeById(Id);
        } catch (error) {
            throw new NotFoundException();
        }
    }

    @Delete('/deleteEmpById/:Id')
    async deleteEmp(@Param('Id', ParseIntPipe,) Id: number, @Res() res: Response) {
        try {
            return await this.EmployeeService.deleteEmp(Id, res);
        } catch (error) {
            throw new NotFoundException();
        }
    }

    @Post('/signup')
    async signUp(@Body() EmpData: EmployeeDto): Promise<any> {
        try {
            return await this.EmployeeService.signUp(EmpData);
        } catch (error) {
            throw new BadRequestException('User already Present');
        }
    }
    @Post('/login')
    async login(@Body() EmpData: { email: string, password: string }): Promise<any> {
        try {
            return await this.EmployeeService.login(EmpData);
        } catch (error) {
            throw new UnauthorizedException("Internal server Error");
        }
    }
}