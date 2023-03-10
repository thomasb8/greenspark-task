import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { DataSource, DataSourceOptions } from "typeorm";

if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const dotenv = require('dotenv');
  dotenv.config();
}

export const createOrmConfig: () => DataSourceOptions = () => {
  return {
    name: 'greenspark',
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,

    namingStrategy: new SnakeNamingStrategy(),
    entities: [
      `${__dirname}/**/*.entity{.ts,.js}`
    ],
    migrations: [
      `${__dirname}/../migrations/*{ts,.js}`
    ],
    cli: {
      migrationsDir: './migrations',
      entitiesDir: './src/**/*.entity.ts'
    },
    synchronize: false
  };
};

export default new DataSource(createOrmConfig());
