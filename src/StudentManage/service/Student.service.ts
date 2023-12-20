import { Injectable, Get, Post, Query, ParseIntPipe, HttpException, HttpStatus, UseFilters, BadRequestException, NotFoundException, } from "@nestjs/common";
import { StudentSchema } from "../dto/Student.dto";

// import { MyException } from "../CustomException/MyException";


@Injectable()
export class StudentService {
    private StudentData = [];
    @Get('/getStudents')
    getStudents() {
        if (this.StudentData.length === 0) {
            throw new BadRequestException("Users Not exist")
        }
        else {

            return this.StudentData;
        }
    }

    @Post('/addStudent')
    addStudent(studentData: StudentSchema) {
        try {

            this.StudentData.push(studentData);
            return `Student Id ${studentData.Id} added`
        }
        catch (err) {
            return;
        }
    }
    @Post('/addStudentMultiRecord')
    addStudentMultiRecord(studentData: StudentSchema[]) {
        studentData.forEach((ele) => {
            this.StudentData.push(ele);
        })
        return `Student Element added`
    }
    @Get()
    getStudentById(id: number) {
        let student = this.StudentData.find((ele) => ele.Id === id);
        if (!student) {
            // throw new HttpException({ Error: "Not found", timestamp: Date.now(), id: id }, HttpStatus.NOT_FOUND)
            throw new NotFoundException("Not found");
            // throw new MyException("Not found");
        }
        else {
            return student;
        }
    }


}