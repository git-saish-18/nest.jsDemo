import { Module } from '@nestjs/common';
import { EmployeeModule } from './EmployeeManegment/Employee.module';
import { PrismaService } from 'prisma/PrismaService';
// import { RouterModule } from '@nestjs/core';

@Module({
  imports: [EmployeeModule],
  controllers: [],
  providers: [],
})
export class AppModule { 
}
