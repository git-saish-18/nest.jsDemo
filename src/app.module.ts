import { Module } from '@nestjs/common';
import { UsersModule } from './User/Users.module';
import { EmployeeModule } from './Employee/Employee.module';
import { CrudOperationModule } from './CrudOperation/CrudOperation.module';
import { AlbumsModule } from './Albums/Albums.module';



@Module({
  imports: [UsersModule, EmployeeModule, CrudOperationModule, AlbumsModule],
  controllers: [],
  providers: [],
  
})
export class AppModule { }
