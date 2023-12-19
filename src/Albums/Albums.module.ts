import { Module } from "@nestjs/common";
import { AlbumController } from "./Controller/album.controller";
const connection = async () => {
    return "connection with DB success "
}
@Module({
    imports: [],
    exports: [],
    controllers: [AlbumController],
    
  // registration of dependency injection in IOC ---> property as dependency
    providers: [{
        provide: "DbConnection", useFactory: async () => {
            const connectmsg = await connection();
            return connectmsg;
        }
    },
    { provide: "albumObj", useValue: { albumName: "classic", NumberSongs: 10 } },]
})
export class AlbumsModule { }