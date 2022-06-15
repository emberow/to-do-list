import { Tag } from '../entities/tag.entity';
import { BlockList } from 'net';
import {Todo} from '../entities/todo.entity';
import { Connection } from 'typeorm';

//sofe delete
async function findOneById(id: number){
    return Todo.findBy({id: id, isDelete: false});
}

async function findOneByTag(tag: string){
    return Tag.findBy({name: tag})
}

//sofe delete
async function list() {
    return Todo.find({relations: ["tags"]});
    // return Todo.findBy({isDelete: false});
}

async function add(todoData: { thing: string, isFinish: boolean, isDelete: boolean}, tags: string[]){
    let todo = new Todo();
    Object.assign(todo, todoData);
    todo.tags = [];
    //使用for 當資料庫有此tag則不儲存，反之儲存

    for(let i = 0; i < tags.length; i++){
        let data = await findOneByTag(tags[i]);
        let tag = new Tag();
        //資料庫已經有這個tag了
        if(data.length == 1){
            tag.id = data[0].id;
            tag.name = data[0].name;
            todo.tags.push(tag);
        }
        //資料庫沒有此tag，儲存到資料庫
        else{
            tag.name = tags[i];
            todo.tags.push(await tag.save());
        }
    }
    
    const result = await todo.save()
    return result;
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

async function softDel(id: number){
    const data = (await findOneById(id))[0];
    if(data){
        data.isDelete = true;
        return data.save();
    }
    return "error: 此id不存在"
}

export default {
    list,
    add,
    update,
    del,
    softDel,
};