import TodoModel from '../models/todo.model';


async function list() {
    return TodoModel.list();
}

async function add(thing: string) {
    let todoData = {thing: thing, isFinish: false, isDelete: false};
    let data = await TodoModel.add(todoData);
    const result = {
        thing: data.thing, 
        isFinish: data.isFinish, 
        createdAt: data.createdAt,
    };
    
    return result;
}

async function update(todoData: {id: number, thing: string, isFinish: boolean}) {
    return TodoModel.update(todoData);
}

async function del(id: number) {
    return TodoModel.softDel(id);
}

export default {
    list,
    add,
    update,
    del,
};