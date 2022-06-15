import { DataSource } from 'typeorm';
import 'dotenv/config';

const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.USER_NAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    
    synchronize: true,
    logging: true,
    entities: ['./dist/entities/*.js'],
    migrations: ['./src/migrations/*.ts'],
});
export default AppDataSource;
