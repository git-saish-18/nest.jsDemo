import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { StudentMiddleWare } from './StudentManage/middleware/Student-middleware';
import { StudentInterceptor } from './StudentManage/Interceptors/Student.interceptor';
import { ConfigService } from '@nestjs/config';
import { copyFile } from 'fs';

import * as session from 'express-session';
import * as cookieParser from 'cookie-parser';



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


  // apply cookies as global
  app.use(cookieParser());

  // apply session as global
  app.use(session({
    secret: 'your-secret-key', // Replace with a strong, secure secret
    resave: false,
    saveUninitialized: false,
    cookie: { Id: "B112" }, // Enable secure cookie in production
  }))

  await app.listen(process.env['PORT_NO']).then(() => { console.log(`server running on ${process.env["SERVER_URL"]}`) });
}
bootstrap();
