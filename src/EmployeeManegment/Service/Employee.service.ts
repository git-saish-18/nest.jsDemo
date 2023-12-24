import { Body, Get, Injectable, NotFoundException, Post, ValidationPipe } from "@nestjs/common";
import { EmployeeDto } from "../dto/Employee.dto";
import { NotFoundError } from "rxjs";
import { PrismaService } from "prisma/PrismaService";

@Injectable()
export class EmployeeService {
    constructor(private Prisma: PrismaService) { }
    @Get('/getallemp')
    async getEmployee(): Promise<string> {
        // throw new NotFoundException()
        return "Get all employee"
    }
    @Post('/addemp')
    async addEmployee(empdata: EmployeeDto): Promise<string> {
        return "Get all employee"
    }
}