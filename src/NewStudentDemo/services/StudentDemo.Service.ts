import { Get, Injectable, Post } from "@nestjs/common";
import { StudentSchema } from "../dto/StudentSchema.dto";
@Injectable()
export class StudentDemoService {
    @Get('/allStudents')
    getAllStudent() {
        return "get all student"
    }

    @Post("/addStudents")
    CreateStudent(StudentData: StudentSchema) {
        return "add student"
    }
}