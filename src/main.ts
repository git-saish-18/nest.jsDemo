import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { StudentMiddleWare } from './StudentManage/middleware/Student-middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // we can perform global level validation 
  app.useGlobalPipes(new ValidationPipe({ transform: true, }));
  // we can use global level middleware it should be function based middleware 
  // app.use(StudentMiddleWare);
  await app.listen(3000).then(() => { console.log(`server running on http://localhost:3000`) });
}
bootstrap();
