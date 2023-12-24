import { Module } from "@nestjs/common";
import { PrismaService } from "./PrismaService";


@Module({
    imports: [PrismaService],
    exports: [PrismaService]
})
export class PrismModule {

}