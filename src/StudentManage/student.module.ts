import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { StudentSectionController } from './controller/StudentSection.controller';
import { StudentService } from './service/Student.service';
import { StudentMiddleWare } from './middleware/Student-middleware';
import { StudentClassBasedMiddleWaare } from './middleware/Student-middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DB_config_PG } from './orm.config/orm.config';
import { DataBaseConfig } from './orm.config/DataBase.config';
import { ConfigModule } from '@nestjs/config';
import { StudentDatas } from './StudentEntity/Student.entity';
@Module({
  exports: [],
  imports: [TypeOrmModule.forRoot(DB_config_PG), ConfigModule.forFeature(DataBaseConfig),TypeOrmModule.forFeature([StudentDatas])],
  providers: [StudentService],
  controllers: [StudentSectionController],

})
export class StudentModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(StudentMiddleWare).forRoutes("StudentSection/getStudents", "StudentSection/addStudent")
    // consumer.apply(StudentMiddleWare, StudentClassBasedMiddleWaare).exclude({ path: "StudentSection/getStudentById", method: RequestMethod.GET }).forRoutes(StudentSectionController)
    // consumer.apply(StudentMiddleWare, StudentClassBasedMiddleWaare).forRoutes({ path: "StudentSection/getStudents", method: RequestMethod.GET })

    // It's called for all  routes in our application means global middleware
    // consumer
    //   .apply(StudentMiddleWare, StudentClassBasedMiddleWaare)
    //   .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
