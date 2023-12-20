import { Injectable, Get, Post, } from "@nestjs/common";
// import { StudentSchema } from "../dto/Student.dto";
import { StudentSchema } from "../StudentSchema/Student-schema";



@Injectable()
export class StudentService {
    private StudentData = [];
    @Get('/getStudents')
    getStudents() {
        return this.StudentData;
    }

    @Post('/addStudent')
    addStudent(studentData: StudentSchema) {
        this.StudentData.push(studentData);
        return `Student Id ${studentData.id} added`
    }
}