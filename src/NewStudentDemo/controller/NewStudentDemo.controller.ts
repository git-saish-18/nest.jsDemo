import { Body, Controller, Get, Post, ValidationPipe } from "@nestjs/common";
import { StudentSchema } from "../dto/StudentSchema.dto";
import { StudentDemoService } from "../services/StudentDemo.Service";

@Controller("/StudentDemo")
export class NewStudentDemocontroller {

    constructor(private StudentService: StudentDemoService) { }

    @Get('/allStudents')
    getAllStudent() {
        return this.StudentService.getAllStudent()
    }

    @Post("/addStudents")
    CreateStudent(@Body(ValidationPipe) StudentData: StudentSchema) {
        return this.StudentService.CreateStudent(StudentData)
    }
}