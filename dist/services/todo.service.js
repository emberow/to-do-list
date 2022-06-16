"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const todo_model_1 = __importDefault(require("../models/todo.model"));
async function list() {
    return todo_model_1.default.list();
}
async function add(thing, tags) {
    let todoData = { thing: thing, isFinish: false, isDelete: false, tags: tags };
    let data = await todo_model_1.default.add(todoData);
    // const result = {
    //     thing: data.thing, 
    //     isFinish: data.isFinish, 
    //     createdAt: data.createdAt,
    // };
    return data;
}
async function update(todoData) {
    return todo_model_1.default.update(todoData);
}
async function del(id) {
    return todo_model_1.default.softDel(id);
}
exports.default = {
    list,
    add,
    update,
    del,
};
//# sourceMappingURL=todo.service.js.map