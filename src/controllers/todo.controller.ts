import { Request, Response } from 'express';
import TodoService from '../services/todo.service';

async function list(req: Request, res: Response) {
    res.json(await TodoService.list());
}

async function add(req: Request, res: Response) {
    const thing = req.body.thing; 
    const tags = req.body.tags;
    res.json(await TodoService.add(thing, tags));
}

async function update(req: Request, res: Response) {
    const id = Number(req.params.id);
    const { thing, isFinish } = req.body; 
    const todoData = {id, thing, isFinish};
    res.json(await TodoService.update(todoData));
}

async function del(req: Request, res: Response) {
    const id = Number(req.params.id);
    res.json(await TodoService.del(id));
}

export default {
    list,
    add,
    update,
    del,
};