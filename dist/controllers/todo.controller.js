"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const todo_service_1 = __importDefault(require("../services/todo.service"));
async function list(req, res) {
    res.json(await todo_service_1.default.list());
}
async function add(req, res) {
    const thing = req.body.thing;
    res.json(await todo_service_1.default.add(thing));
}
async function update(req, res) {
    const id = Number(req.params.id);
    const { thing, isFinish } = req.body;
    const todoData = { id, thing, isFinish };
    res.json(await todo_service_1.default.update(todoData));
}
async function del(req, res) {
    const id = Number(req.params.id);
    res.json(await todo_service_1.default.del(id));
}
exports.default = {
    list,
    add,
    update,
    del,
};
//# sourceMappingURL=todo.controller.js.map