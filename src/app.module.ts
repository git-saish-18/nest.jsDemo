import { Module } from '@nestjs/common';
import { EmployeeModule } from './EmployeeManegment/Employee.module';
import { PrismaService } from 'prisma/PrismaService';
import { PrismModule } from 'prisma/Prisma.module';
// import { RouterModule } from '@nestjs/core';

@Module({
  imports: [EmployeeModule,PrismModule],
  controllers: [],
  providers: [],
})
export class AppModule { 
}
