import { Module } from '@nestjs/common';
import { UserController } from './Controller/users.controllers';
import { AlbumController } from './Controller/album.controller'
import { CrudOperation } from './Controller/crud.controller';
import { ServiceDemo } from './Controller/serviceDemo.controller';
import { EmployeeService } from './Services/employee.service';
@Module({
  imports: [],
  controllers: [UserController, AlbumController, CrudOperation, ServiceDemo],
  providers: [EmployeeService],
})
export class AppModule { }
