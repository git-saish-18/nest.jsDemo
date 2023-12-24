import {
    BadRequestException,
    Delete,
    Get,
    HttpStatus,
    Injectable,
    NotFoundException,
    Post,
} from '@nestjs/common';
import { EmployeeDto } from '../dto/Employee.dto';
import { PrismaService } from 'prisma/PrismaService';
import { Response } from 'express';

@Injectable()
export class EmployeeService {
    constructor(private Prisma: PrismaService) { }
    @Get('/getallemp')
    async getEmployee(): Promise<any> {
        try {
            return await this.Prisma.employee.findMany();
        } catch (error) {
            throw new NotFoundException();
        }
    }
    @Post('/addemp')
    async addEmployee(empdata: EmployeeDto): Promise<any> {
        try {
            return this.Prisma.employee.create({ data: empdata });
        } catch (error) {
            throw new BadRequestException();
        }
    }
    @Get('/findEmpById/:Id')
    async getEmployeeById(Id: number): Promise<any> {
        return this.Prisma.employee.findUnique({ where: { employeeId: Id } });
    }

    @Delete('/deleteEmpById')
    async deleteEmp(Id: number, res: Response) {
        let a = this.Prisma.employee.delete({ where: { employeeId: Id } });
        a.then((ele) => {
            return res.send(ele);
        }).catch(() => {
            return res.status(HttpStatus.NOT_FOUND).send({ msg: 'User not found' });
        });
    }
}
