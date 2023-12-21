import { Module, OnModuleInit } from '@nestjs/common';
import { UsersModule } from './User/Users.module';
import { EmployeeModule } from './Employee/Employee.module';
import { CrudOperationModule } from './CrudOperation/CrudOperation.module';
import { AlbumsModule } from './Albums/Albums.module';
import { RouterModule } from '@nestjs/core';

import { AllRoutes } from './app-route';
import { StudentModule } from './StudentManage/student.module';
const ROUTE = [{ path: 'users', module: UsersModule }, ...AllRoutes];

@Module({
  imports: [
    EmployeeModule,
    CrudOperationModule,
    AlbumsModule,
    StudentModule,
    RouterModule.register(ROUTE),
    UsersModule,

  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule implements OnModuleInit {
  onModuleInit() {
    console.log("App Module Init")
  }
}
