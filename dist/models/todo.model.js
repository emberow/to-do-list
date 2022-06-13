"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todo_entity_1 = require("../entities/todo.entity");
async function findOneById(id) {
    return todo_entity_1.Todo.findBy({ "id": id });
}
async function list() {
    console.log(await findOneById(5));
    return todo_entity_1.Todo.find();
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
exports.default = {
    list,
    add,
    update,
    del
};
//# sourceMappingURL=todo.model.js.map