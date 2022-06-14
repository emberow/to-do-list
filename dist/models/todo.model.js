"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todo_entity_1 = require("../entities/todo.entity");
//sofe delete
async function findOneById(id) {
    return todo_entity_1.Todo.findBy({ "id": id, "isDelete": false });
}
//sofe delete
async function list() {
    return todo_entity_1.Todo.findBy({ isDelete: false });
}
async function add(todoData) {
    const todo = new todo_entity_1.Todo();
    Object.assign(todo, todoData);
    return todo.save();
}
async function update(todoData) {
    const id = todoData.id;
    const data = await findOneById(id);
    if (data.length != 0) {
        const todo = new todo_entity_1.Todo();
        Object.assign(todo, todoData);
        return todo.save();
    }
    return "error: 此id不存在";
}
async function del(id) {
    const data = await findOneById(id);
    if (data.length != 0) {
        const todo = await todo_entity_1.Todo.findOneByOrFail({ id });
        return todo.remove();
    }
    return "error: 此id不存在";
}
async function softDel(id) {
    const data = (await findOneById(id))[0];
    if (data) {
        data.isDelete = true;
        return data.save();
    }
    return "error: 此id不存在";
}
exports.default = {
    list,
    add,
    update,
    del,
    softDel,
};
//# sourceMappingURL=todo.model.js.map