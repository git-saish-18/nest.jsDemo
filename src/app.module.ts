import { Module } from '@nestjs/common';
import { UserController } from './users.controllers';
import { AlbumController } from './album.controller'
@Module({
  imports: [],
  controllers: [UserController, AlbumController],
  providers: [],
})
export class AppModule { }
