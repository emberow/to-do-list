import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "32865417",
    database: "test",
    
    synchronize: true,
    logging: true,
    entities: ['./dist/entities/*.js'],
    migrations: ['./src/migrations/*.ts'],
});

export default AppDataSource;
