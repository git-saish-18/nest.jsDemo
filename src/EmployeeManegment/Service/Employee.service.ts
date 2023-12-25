import {
  BadRequestException,
  Delete,
  Get,
  HttpStatus,
  Injectable,
  NotAcceptableException,
  NotFoundException,
  Post,
  UnauthorizedException,
} from '@nestjs/common';
import { EmployeeDto } from '../dto/Employee.dto';
import { PrismaService } from 'prisma/PrismaService';
import { Request, Response } from 'express';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class EmployeeService {
  constructor(
    private Prisma: PrismaService,
    private jwtService: JwtService,
  ) { }
  @Get('/getallemp')
  async getEmployee(req: Request): Promise<any> {
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

  @Post('/signup')
  async signUp(userData: EmployeeDto): Promise<any> {
    try {
      const { email } = userData;
      const user = await this.Prisma.employee.findUnique({
        where: { email: email },
      });
      if (user === null) {
        const { password } = userData;
        const salt = await bcrypt.genSalt(10);
        const newpass = await bcrypt.hash(password, salt);
        const token = this.jwtService.sign({ EmailId: userData.email });
        const NewUser = { ...userData, password: newpass, token: token };
        return this.Prisma.employee.create({ data: NewUser });
      } else {
        throw new NotAcceptableException('User already Present');
      }
    } catch (error) {
      throw new BadRequestException('User already Present');
    }
  }

  @Post('/login')
  async login(userData: { email: string; password: string }): Promise<any> {
    try {
      const { email, password } = userData;
      const user = await this.Prisma.employee.findUnique({
        where: { email: email },
      });
      if (user !== null) {
        if (await bcrypt.compare(password, user.password)) {
          return this.jwtService.sign({ EmailId: userData.email });
        } else {
          throw new UnauthorizedException('Internal server Error');
        }
      } else {
        throw new NotFoundException('User Not found');
      }
    } catch (error) {
      throw new UnauthorizedException('Internal server Error');
    }
  }
}
