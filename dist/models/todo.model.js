"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tag_entity_1 = require("../entities/tag.entity");
const todo_entity_1 = require("../entities/todo.entity");
//sofe delete
async function findOneById(id) {
    return todo_entity_1.Todo.findBy({ id: id, isDelete: false });
}
async function findOneByTag(tag) {
    return tag_entity_1.Tag.findBy({ name: tag });
}
//sofe delete
async function list() {
    return todo_entity_1.Todo.find({ relations: ["tags"] });
    // return Todo.findBy({isDelete: false});
}
async function add(todoData, tags) {
    let todo = new todo_entity_1.Todo();
    todo.tags = [];
    //使用for 當資料庫有此tag則不儲存，反之儲存
    tags.forEach(async (element) => {
        let data = await findOneByTag(element);
        let tag = new tag_entity_1.Tag();
        //資料庫已經有這個tag了
        if (data.length == 1) {
            tag.id = data[0].id;
            tag.name = data[0].name;
        }
        //資料庫沒有此tag，儲存到資料庫
        else {
            tag.name = element;
            tag.save();
        }
        todo.tags.push(tag);
    });
    Object.assign(todo, todoData);
    console.log(todo);
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