import {registerAs} from "@nestjs/config";
import {DataSource, DataSourceOptions} from "typeorm";
import getEnvVariable from "../utils/getEnvVariable";

const config = {
    type: 'postgres',
    host: getEnvVariable('POSTGRES_HOST').toString(),
    port: Number(getEnvVariable('POSTGRES_PORT', 5432)),
    username: getEnvVariable('POSTGRES_USER').toString(),
    password: getEnvVariable('POSTGRES_PASSWORD').toString(),
    database: getEnvVariable('POSTGRES_DATABASE').toString(),
    entities: ["dist/**/*.entity.js"],
    migrations: ["dist/migrations/*.js"],
    autoLoadEntities: true,
    synchronize: false,
}

export default registerAs('typeorm', () => config)
export const connectionSource = new DataSource(config as DataSourceOptions);
