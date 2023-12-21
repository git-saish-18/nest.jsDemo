import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { StudentMiddleWare } from './StudentManage/middleware/Student-middleware';
import { StudentInterceptor } from './StudentManage/Interceptors/Student.interceptor';
import { ConfigService } from '@nestjs/config';
import { copyFile } from 'fs';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // we can perform global level validation 
  app.useGlobalPipes(new ValidationPipe({ transform: true, }));
  // we can use global level middleware it should be function based middleware 
  // app.use(StudentMiddleWare);

  app.useGlobalInterceptors(new StudentInterceptor())

  // different way to config env
  const Configservice = app.get(ConfigService);
  const portNo = Configservice.get("PORT_NO");
  const DB_CONFIG = Configservice.get('DataBase_Cofig');
  console.log("My Port Number", portNo, DB_CONFIG)

  await app.listen(process.env['PORT_NO']).then(() => { console.log(`server running on ${process.env["SERVER_URL"]}`) });
}
bootstrap();
