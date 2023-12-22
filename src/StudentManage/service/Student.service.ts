import {
    Injectable,
    Get,
    Post,
    Query,
    ParseIntPipe,
    HttpException,
    HttpStatus,
    UseFilters,
    BadRequestException,
    NotFoundException,
    Delete,
    Put,
} from '@nestjs/common';
import { StudentSchema } from '../dto/Student.dto';
import { StudentDatas } from '../StudentEntity/Student.entity';
// import { MyException } from "../CustomException/MyException";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class StudentService {
    // private StudentData = [];

    constructor(
        @InjectRepository(StudentDatas)
        private readonly StudentDatase: Repository<StudentDatas>,
    ) { }
    @Get('/getStudents')
    async getStudents(): Promise<StudentDatas[] | undefined> {
        // if (this.StudentData.length === 0) {
        //     throw new BadRequestException("Users Not exist")
        // }
        // else {

        //     return this.StudentData;
        // }
        let Users = this.StudentDatase.find();
        if (Users) {
            return this.StudentDatase.find();
        } else {
            throw new BadRequestException('Users Not exist');
        }
    }

    @Post('/addStudent')
    async addStudent(studentData: StudentSchema): Promise<StudentDatas | undefined> {
        try {
            return await this.StudentDatase.save(studentData);
            // return new Promise((resolve) => { setTimeout(() => { resolve(studentData.Id), 2000 }) })
        } catch (err) {
            return;
        }
    }
    // @Post('/addStudentMultiRecord')
    // addStudentMultiRecord(studentData: StudentSchema[]) {
    //     studentData.forEach((ele) => {
    //         this.StudentData.push(ele);
    //     });
    //     return `Student Element added`;
    // }

    @Get("/getStudentById")
    async getStudentById(id: number): Promise<StudentDatas[] | String> {
        // let student = this.StudentData.find((ele) => ele.Id === id);
        // if (!student) {
        //     // throw new HttpException({ Error: "Not found", timestamp: Date.now(), id: id }, HttpStatus.NOT_FOUND)
        //     throw new NotFoundException("Not found");
        //     // throw new MyException("Not found");
        // }
        // else {
        //     return student;
        // }

        return this.StudentDatase.findBy({ Id: id });
    }

    @Delete('/deteteStudent')
    async deleteStudent(id: number): Promise<String> {
        let a = await this.StudentDatase.delete(id);
        if (a.affected === 0) {
            throw new NotFoundException();
        }
        return;
    }

}
