import { Module } from '@nestjs/common';
import { UsersModule } from './User/Users.module';
import { EmployeeModule } from './Employee/Employee.module';
import { CrudOperationModule } from './CrudOperation/CrudOperation.module';
import { AlbumsModule } from './Albums/Albums.module';
import { RouterModule } from '@nestjs/core';

import { AllRoutes } from './app-route';
const ROUTE = [{ path: 'users', module: UsersModule }, ...AllRoutes];

@Module({
  imports: [
    UsersModule,
    EmployeeModule,
    CrudOperationModule,
    AlbumsModule,
    RouterModule.register(ROUTE),
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
