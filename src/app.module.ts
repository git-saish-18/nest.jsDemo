import { Module } from '@nestjs/common';
import { UserController } from './users.controllers';
import { AlbumController } from './album.controller'
import { CrudOperation } from './crud.controller';
@Module({
  imports: [],
  controllers: [UserController, AlbumController, CrudOperation],
  providers: [],
})
export class AppModule { }
