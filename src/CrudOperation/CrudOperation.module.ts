import { Module } from "@nestjs/common";
import { CrudOperation } from "./Controllers/crud.controller";

@Module({
    imports: [],
    exports: [],
    providers: [{ provide: "Db_Name", useValue: "SQL" },],
    controllers: [CrudOperation]
})
export class CrudOperationModule { }