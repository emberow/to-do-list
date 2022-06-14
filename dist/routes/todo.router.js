"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todo_controller_1 = __importDefault(require("../controllers/todo.controller"));
const celebrate_1 = require("celebrate");
const todo_validation_1 = __importDefault(require("../validations/todo.validation"));
const router = express_1.default.Router();
router.route('/')
    .get(todo_controller_1.default.list)
    .post((0, celebrate_1.celebrate)(todo_validation_1.default.add), todo_controller_1.default.add);
router.route('/:id')
    .put((0, celebrate_1.celebrate)(todo_validation_1.default.update), todo_controller_1.default.update)
    .delete(todo_controller_1.default.del);
exports.default = router;
//# sourceMappingURL=todo.router.js.map