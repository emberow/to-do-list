"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
require("dotenv/config");
const AppDataSource = new typeorm_1.DataSource({
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
exports.default = AppDataSource;
//# sourceMappingURL=db.config.js.map