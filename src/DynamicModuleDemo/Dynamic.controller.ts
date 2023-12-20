
import { DynamicModule } from "./DynamicModule.module";
export class DynamicController {
    constructor(private DynamicModule: DynamicModule) {
        console.log(this.DynamicModule)
    }
}