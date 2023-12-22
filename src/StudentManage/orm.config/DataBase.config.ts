import { registerAs } from "@nestjs/config";

export const DataBaseConfig = registerAs("DataBaseConfig", () => {
    return {
        type: process.env.Type,
        host: process.env.host,
        port: process.env.port,
        username: process.env.username,
        password: process.env.password,
        database: process.env.database,
        entities: process.env.entities,
        synchronize: process.env.synchronize,
    };
})
