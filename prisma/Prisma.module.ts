import { Module } from "@nestjs/common";
import { PrismaService } from "./PrismaService";


@Module({
    imports: [],
    exports: [PrismaService],
    providers: [PrismaService]
})
export class PrismModule {

}