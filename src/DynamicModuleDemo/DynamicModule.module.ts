import { Module } from "@nestjs/common";

const DB_NAME_Default = "MySql";
@Module({})
export class DynamicModule {
    static register(DbName: string): DynamicModule {
        const DBName = Object.assign({ DB_name: DB_NAME_Default }, DbName)
        return { module: DynamicModule, provides: [{ provide: DBName, useValue: { DB_name: DBName } }], exports: [DynamicModule] }
    }
}