import { TypeOrmModuleOptions } from "@nestjs/typeorm";
export const DB_config_PG: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: "postgres",
    password: 'Saish@1425',
    database: 'Student',
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: true,
}