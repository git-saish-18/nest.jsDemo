import { Body, Controller, Get, Post, ValidationPipe } from "@nestjs/common";
// import { StudentSchema } from "../dto/Student.dto";
import { StudentService } from "../service/Student.service";
import { UpdateStudentSchema } from "../dto/updateSchema.dto";
@Controller()
export class StudentSectionController {

    constructor(private StudentService: StudentService) { }

    @Get('/getStudents')
    getStudents() {
        return this.StudentService.getStudents();
    }

    @Post('/addStudent')
    addStudent(@Body(ValidationPipe) studentData: UpdateStudentSchema) {
        return this.StudentService.addStudent(studentData);
    }

}