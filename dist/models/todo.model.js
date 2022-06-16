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
async function add(todoData) {
    let todo = new todo_entity_1.Todo();
    Object.assign(todo, todoData);
    todo.tags = [];
    //使用for 當資料庫有此tag則不儲存，反之儲存
    for (let i = 0; i < todoData.tags.length; i++) {
        let data = await findOneByTag(todoData.tags[i]);
        let tag = new tag_entity_1.Tag();
        //資料庫已經有這個tag了
        if (data.length == 1) {
            tag.id = data[0].id;
            tag.name = data[0].name;
            todo.tags.push(tag);
        }
        //資料庫沒有此tag，儲存到資料庫
        else {
            tag.name = todoData.tags[i];
            todo.tags.push(await tag.save());
        }
    }
    const result = await todo.save();
    return result;
}
async function update(todoData) {
    const todo = new todo_entity_1.Todo();
    Object.assign(todo, todoData);
    todo.tags = [];
    const id = todoData.id;
    const data = await findOneById(id);
    for (let i = 0; i < todoData.tags.length; i++) {
        //dbHasTag可以判斷資料庫是否有這個tag
        const tagInfo = (await findOneByTag(todoData.tags[i]));
        //如果沒有的話，則新增到db
        if (!(tagInfo.length == 1)) {
            let tag = new tag_entity_1.Tag();
            tag.name = todoData.tags[i];
            todo.tags.push(await tag.save());
        }
        //如果有則讀取該tag的id，並將它跟todo綁定
        else {
            let tag = new tag_entity_1.Tag();
            tag.id = tagInfo[0].id;
            tag.name = tagInfo[0].name;
            console.log(tag);
            todo.tags.push(tag);
        }
    }
    //此資料在資料庫存在時就可以修改
    if (data.length != 0) {
        console.log(todo);
        return todo.save();
    }
    return {};
}
async function del(id) {
    const data = await findOneById(id);
    if (data.length != 0) {
        const todo = await todo_entity_1.Todo.findOneByOrFail({ id });
        return todo.remove();
    }
    return {};
}
async function softDel(id) {
    const data = (await findOneById(id))[0];
    if (data) {
        data.isDelete = true;
        return data.save();
    }
    return {};
}
exports.default = {
    list,
    add,
    update,
    del,
    softDel,
};
//# sourceMappingURL=todo.model.js.map