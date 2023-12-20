import { Body, Controller, Get, ParseArrayPipe, ParseIntPipe, Post, Query, ValidationPipe, UseFilters } from "@nestjs/common";
import { StudentSchema } from "../dto/Student.dto";
import { StudentService } from "../service/Student.service";
import { MyExceptionFilter } from "../CustomException/MyException-filter";
import { HttpExceptionFilter } from "../CustomException/http-Exception-filter";

@Controller()
@UseFilters(HttpExceptionFilter)
export class StudentSectionController {

    constructor(private StudentService: StudentService) { }

    @Get('/getStudents')
    getStudents() {
        return this.StudentService.getStudents();
    }
    @Get('/getStudentById')
    @UseFilters(MyExceptionFilter)
    getStudentById(@Query('id', ParseIntPipe) id: number) {
        return this.StudentService.getStudentById(id)
    }

    @Post('/addStudent')
    addStudent(@Body(ValidationPipe) studentData: StudentSchema) {
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