import { Request, Response } from 'express';
import { todo } from '../entities/todo.entity';

async function list(req: Request, res: Response) {
    // res.json(await User.find());
    res.json("hi");
}

export default {
    list,
};