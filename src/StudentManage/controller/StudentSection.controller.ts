import { Body, Controller, Get, ParseArrayPipe, ParseIntPipe, Post, Query, ValidationPipe, UseFilters, Req, UseInterceptors } from "@nestjs/common";
import { StudentSchema } from "../dto/Student.dto";
import { StudentService } from "../service/Student.service";
import { MyExceptionFilter } from "../CustomException/MyException-filter";
import { HttpExceptionFilter } from "../CustomException/http-Exception-filter";
import { Request } from "express";
import { StudentInterceptor } from "src/User/Interceptors/Student.interceptor";

@Controller()
// @UseInterceptors(StudentInterceptor)
@UseFilters(HttpExceptionFilter)
export class StudentSectionController {


    constructor(private StudentService: StudentService) { }

    @Get('/getStudents')
    getStudents(@Req() req: Request) {
        // console.log(req["UA"], req["Saish"])
        return this.StudentService.getStudents();
    }
    @Get('/getStudentById')
    @UseFilters(MyExceptionFilter)
    getStudentById(@Query('id', ParseIntPipe) id: number) {
        return this.StudentService.getStudentById(id)
    }

    @Post('/addStudent')
    addStudent(@Req() req: Request, @Body(ValidationPipe) studentData: StudentSchema) {
        // throw new Error("Error occured")
        // console.log(req["UA"], req["Saish"])

        return this.StudentService.addStudent(studentData);
    }
    // @Post('/addStudentMultiRecord')
    // addStudentMultiRecord(@Body(new ParseArrayPipe({ items: StudentSchema },ValidationPipe)) studentData: StudentSchema[]) {
    //     return this.StudentService.addStudentMultiRecord(studentData);
    // }
    @Post('/addStudentMultiRecord')
    addStudentMultiRecord(@Body(new ParseArrayPipe({ items: StudentSchema }), new ValidationPipe({ transform: true, })) studentData: StudentSchema[]) {
        return this.StudentService.addStudentMultiRecord(studentData);
    }


}