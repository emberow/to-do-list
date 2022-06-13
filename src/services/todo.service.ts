import TodoModel from '../models/todo.model';


async function list() {
    return TodoModel.list();
}

async function add(todoData: { thing: string, isFinish: boolean}) {
    todoData.isFinish = false;
    console.log(todoData);
    return TodoModel.add(todoData);
}

async function update(todoData: {id: number, thing: string, isFinish: boolean}) {
    return TodoModel.update(todoData);
}

async function del(id: number) {
    return TodoModel.del(id);
}

export default {
    list,
    add,
    update,
    del,
};