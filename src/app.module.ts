import { Module, OnModuleInit } from '@nestjs/common';
import { UsersModule } from './User/Users.module';
import { EmployeeModule } from './Employee/Employee.module';
import { CrudOperationModule } from './CrudOperation/CrudOperation.module';
import { AlbumsModule } from './Albums/Albums.module';
import { RouterModule } from '@nestjs/core';
import { AllRoutes } from './app-route';
import { StudentModule } from './StudentManage/student.module';
import { ConfigModule } from '@nestjs/config';
// import { JWT_CONFIG } from './Config/jwt.config';
// import { DataBase } from './Config/DataBase.config';
const ROUTE = [{ path: 'users', module: UsersModule }, ...AllRoutes];
import { AllCofig } from './Config/AllCofig';
import { DataBaseAlbum } from './Albums/AlbumConfig/DataBase.config';

@Module({
  imports: [
    EmployeeModule,
    CrudOperationModule,
    AlbumsModule,
    StudentModule,
    RouterModule.register(ROUTE),
    UsersModule,
    // configure the env as global by isGlobal true
    ConfigModule.forRoot({ envFilePath: ".env", cache: true, isGlobal: true, expandVariables: true, load: [...AllCofig] })
    ,

    // to host the config file of one module as global level 
    ConfigModule.forFeature(DataBaseAlbum)
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule implements OnModuleInit {
  onModuleInit() {
    console.log("App Module Init", process.env["SERVER_URL"])
  }
}
