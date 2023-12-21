import { registerAs } from "@nestjs/config"

export const DataBaseAlbum = registerAs("DataBaseAlbum", () => {
    return {
        RootName: process.env.RootName,
        DataBaseName: process.env.DataBaseName,
        RootPass: process.env.RootPass
    }
}) 