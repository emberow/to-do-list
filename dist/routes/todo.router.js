"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todo_controller_1 = __importDefault(require("../controllers/todo.controller"));
const router = express_1.default.Router();
router.route('/').get(todo_controller_1.default.list);
router.route('/').post(todo_controller_1.default.add);
router.route('/:id').put(todo_controller_1.default.update);
router.route('/:id').delete(todo_controller_1.default.del);
exports.default = router;
//# sourceMappingURL=todo.router.js.map