import { Module } from "@nestjs/common";
import { CrudOperation } from "./Controllers/crud.controller";
import { CrudOperationService } from './Service/CrudOperation.service'

@Module({
    imports: [],
    exports: [],
    providers: [CrudOperationService, { provide: "Db_Name", useValue: "SQL" },],
    controllers: [CrudOperation]
})
export class CrudOperationModule { }