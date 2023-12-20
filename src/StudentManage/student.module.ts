import { Module } from "@nestjs/common";
import { StudentSectionController } from "./controller/StudentSection.controller";
import { StudentService } from "./service/Student.service";

@Module({
    exports: [],
    imports: [],
    providers: [StudentService],
    controllers: [StudentSectionController]
})
export class StudentModule { }
