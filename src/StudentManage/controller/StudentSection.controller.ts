import {
    Body,
    Controller,
    Get,
    ParseArrayPipe,
    ParseIntPipe,
    Post,
    Query,
    ValidationPipe,
    UseFilters,
    Req,
    UseInterceptors,
    Delete,
    Put,
} from '@nestjs/common';
import { StudentSchema } from '../dto/Student.dto';
import { StudentService } from '../service/Student.service';
import { MyExceptionFilter } from '../CustomException/MyException-filter';
import { HttpExceptionFilter } from '../CustomException/http-Exception-filter';
import { Request } from 'express';
import { StudentInterceptor } from 'src/StudentManage/Interceptors/Student.interceptor';
import { StudentDatas } from '../StudentEntity/Student.entity';
@Controller()
// @UseInterceptors(StudentInterceptor)
@UseFilters(HttpExceptionFilter)
export class StudentSectionController {
    constructor(private StudentService: StudentService) { }

    @Get('/getStudents')
    async getStudents(@Req() req: Request): Promise<StudentDatas[] | undefined> {
        // console.log(req["UA"], req["Saish"])
        return await this.StudentService.getStudents();
    }
    @Get('/getStudentById')
    // @UseFilters(MyExceptionFilter)
    async getStudentById(
        @Query('id', ParseIntPipe) id: number,
    ): Promise<StudentDatas[] | String> {
        return await this.StudentService.getStudentById(id);
    }

    @Post('/addStudent')
    async addStudent(
        @Req() req: Request,
        @Body(ValidationPipe) studentData: StudentSchema,
    ): Promise<StudentDatas | undefined> {
        // throw new Error("Error occured")
        // console.log(req["UA"], req["Saish"])
        return await this.StudentService.addStudent(studentData);
    }
    // @Post('/addStudentMultiRecord')
    // addStudentMultiRecord(@Body(new ParseArrayPipe({ items: StudentSchema },ValidationPipe)) studentData: StudentSchema[]) {
    //     return this.StudentService.addStudentMultiRecord(studentData);
    // }
    // @Post('/addStudentMultiRecord')
    // addStudentMultiRecord(@Body(new ParseArrayPipe({ items: StudentSchema }), new ValidationPipe({ transform: true, })) studentData: StudentSchema[]) {
    //     return this.StudentService.addStudentMultiRecord(studentData);
    // }

    @Delete('/deteteStudent')
    async deleteStudent(
        @Query('id', ParseIntPipe, ValidationPipe) id: number,
    ): Promise<String> {
        await this.StudentService.deleteStudent(id);
        return "User deleted succefully";
    }
}
