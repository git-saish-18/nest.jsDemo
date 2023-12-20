import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // we can perform global level validation 
  app.useGlobalPipes(new ValidationPipe({ transform: true, }));
  await app.listen(3000).then(() => { console.log(`server running on http://localhost:3000`) });
}
bootstrap();
