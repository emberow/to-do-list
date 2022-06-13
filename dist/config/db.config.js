"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "32865417",
    database: "test",
    synchronize: true,
    logging: true,
    entities: ['./src/entities/*.ts'],
    migrations: ['./src/migrations/*.ts'],
});
exports.default = AppDataSource;
//# sourceMappingURL=db.config.js.map