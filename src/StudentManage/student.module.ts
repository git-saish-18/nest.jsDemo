import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { StudentSectionController } from "./controller/StudentSection.controller";
import { StudentService } from "./service/Student.service";
import { StudentMiddleWare } from "./middleware/Student-middleware";
import { StudentClassBasedMiddleWaare } from './middleware/Student-middleware'
@Module({
    exports: [],
    imports: [],
    providers: [StudentService],
    controllers: [StudentSectionController]
})
export class StudentModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        // consumer.apply(StudentMiddleWare).forRoutes("StudentSection/getStudents", "StudentSection/addStudent")
        // consumer.apply(StudentMiddleWare, StudentClassBasedMiddleWaare).exclude({ path: "StudentSection/getStudentById", method: RequestMethod.GET }).forRoutes(StudentSectionController)
        // consumer.apply(StudentMiddleWare, StudentClassBasedMiddleWaare).forRoutes({ path: "StudentSection/getStudents", method: RequestMethod.GET })

        // It's called for all  routes in our application means global middleware
        consumer.apply(StudentMiddleWare, StudentClassBasedMiddleWaare).forRoutes({ path: "*", method: RequestMethod.ALL })
    }
}
