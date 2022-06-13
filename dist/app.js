"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//可以取得.env的參數
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_1 = __importDefault(require("./config/swagger"));
const celebrate_1 = require("celebrate");
const db_config_1 = __importDefault(require("./config/db.config"));
const routes_1 = __importDefault(require("./routes"));
(async () => {
    const app = (0, express_1.default)();
    await db_config_1.default.initialize();
    app.use((0, cors_1.default)({
        origin: ['http://localhost'],
    }));
    app.use(body_parser_1.default.json());
    app.use(body_parser_1.default.urlencoded({ extended: true }));
    app.use('/api', routes_1.default);
    app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup((0, swagger_jsdoc_1.default)(swagger_1.default)));
    app.use((0, celebrate_1.errors)());
    app.listen(process.env.PORT, () => {
        console.log(`Express server listening on port ${process.env.PORT}`);
    });
})();
//# sourceMappingURL=app.js.map