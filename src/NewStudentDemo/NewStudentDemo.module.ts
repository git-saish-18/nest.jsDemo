import { Module } from "@nestjs/common";
import { StudentDemoService } from "./services/StudentDemo.Service";
import { NewStudentDemocontroller } from "./controller/NewStudentDemo.controller";

@Module({
    imports: [],
    exports: [],
    providers: [StudentDemoService],
    controllers: [NewStudentDemocontroller]

})
export class NewStudentDemoModule {

}