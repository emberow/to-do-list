"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let todoId = 1;
let tagId = 1;
let todoList = [];
let tagList = [];
function findTagInTaglist(tagName) {
    for (let i = 0; i < tagList.length; i++) {
        if (tagList[i].name == tagName) {
            return tagList[i].id;
        }
    }
    return -1;
}
async function add(todoData) {
    let tags = [];
    for (let i = 0; i < todoData.tags.length; i++) {
        const tagName = todoData.tags[i];
        let id = findTagInTaglist(tagName);
        //如果之前沒有儲存過此tag
        if (id == -1) {
            tagList.push({ id: tagId, name: todoData.tags[i] });
            id = tagId;
            tagId += 1;
        }
        tags.push({ id: id, name: todoData.tags[i] });
    }
    const todo = {
        id: todoId,
        thing: todoData.thing,
        createdAt: new Date().toISOString(),
        isFinish: todoData.isFinish,
        isDelete: todoData.isDelete,
        tags: tags
    };
    todoList.push(todo);
    todoId += 1;
    return todo;
}
async function list() {
    return todoList;
}
async function update(todoData) {
    let tags = [];
    for (let i = 0; i < todoData.tags.length; i++) {
        const tagName = todoData.tags[i];
        let id = findTagInTaglist(tagName);
        //如果之前沒有儲存過此tag，則新增
        if (id == -1) {
            tagList.push({ id: tagId, name: todoData.tags[i] });
            id = tagId;
            tagId += 1;
        }
        tags.push({ id: id, name: todoData.tags[i] });
    }
    for (let i = 0; i < todoList.length; i++) {
        if (todoList[i].id == todoData.id) {
            todoList[i].thing = todoData.thing;
            todoList[i].isFinish = todoData.isFinish;
            todoList[i].tags = tags;
            return todoList[i];
        }
    }
}
async function softDel(id) {
    for (let i = 0; i < todoList.length; i++) {
        if (todoList[i].id == id) {
            todoList[i].isDelete = true;
        }
        return todoList[i];
    }
}
exports.default = {
    add,
    list,
    update,
    softDel,
};
//# sourceMappingURL=todo.model.js.map