import { Module } from "@nestjs/common";
import { AlbumController } from "./Controller/album.controller";
import { ConfigModule } from "@nestjs/config";
import { DataBaseAlbum } from "./AlbumConfig/DataBase.config";
const connection = async () => {
    return "connection with DB success "
}
@Module({
    // to host the config file of one module as global level
    // imports: [ConfigModule.forFeature(DataBaseAlbum)],
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