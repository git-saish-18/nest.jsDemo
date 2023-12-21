import { registerAs } from "@nestjs/config"

export const DataBase = registerAs("DataBase_Cofig", () => {
    return {
        RootName: process.env.RootName,
        DataBaseName: process.env.DataBaseName,
        RootPass: process.env.RootPass
    }
}) 