import {Todo} from '../entities/todo.entity';

async function findOneById(id: number){
    return Todo.findBy({"id":id});
}

async function list() {
    console.log(await findOneById(5));
    return Todo.find();
}

async function add(todoData: { thing: string, isFinish: boolean }){
    const todo = new Todo();
    Object.assign(todo, todoData);
    return todo.save();
}

async function update(todoData: {id:number, thing: string, isFinish: boolean }){
    const id = todoData.id;
    const data = await findOneById(id);
    if(data.length != 0){
        const todo = new Todo();
        Object.assign(todo, todoData);
        return todo.save();
    }
    return "error: 此id不存在"
}

async function del(id: number){
    const data = await findOneById(id);
    if(data.length != 0){
        const todo = await Todo.findOneByOrFail({ id });
        return todo.remove();
    }
    return "error: 此id不存在"
    
    
}

export default {
    list,
    add,
    update,
    del
};