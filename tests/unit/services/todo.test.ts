import 'jest';
import 'expect-more-jest';
import TodoService from '../../../src/services/todo.service';
import { stringify } from 'querystring';
import { Todo } from '../../../src/entities/todo.entity';

// NOTE: 可以用 mock model 方式，或是 spyOn
jest.mock('../../../src/models/todo.model');

let todoret;

const todoKeys = ['id', 'thing', 'createdAt', 'isFinish', 'isDelete', 'tags'];

describe('todo service', () =>{
    describe('add', () => {
        test('should have a add todo function', async () => {
            expect(typeof TodoService.add).toBe('function');
        });

        test('should return todo json', async () => {
            const todoThing = "寫api";
            const tags = ["工作","寫程式"];
            todoret = await TodoService.add(todoThing, tags);
            expect(Object.keys(todoret)).toEqual(expect.arrayContaining(todoKeys));
            expect(typeof todoret.id).toBe('number');
            //輸入跟輸出會一樣
            expect(todoret.thing).toBe(todoThing);
            expect(todoret.createdAt).toBeIso8601();
            //如果完成就沒必要加到todo list
            expect(todoret.isFinish).toBe(false);
            //新增的todo不可能為已刪除狀態
            expect(todoret.isDelete).toBe(false);
            for(let i = 0; i < tags.length; i++){
                expect(todoret.tags[i].name = tags[i]);
            }
        });
    });

    describe('list', () => {
        test('should return todo list', async () => {
            const ret = await TodoService.list();
            expect(ret).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({
                        id: expect.any(Number),
                        thing: expect.any(String),
                        createdAt: expect.toBeIso8601(),
                        isFinish: expect.any(Boolean),
                        isDelete: expect.any(Boolean),
                        tags: expect.arrayContaining([
                            expect.objectContaining({
                                id: expect.any(Number),
                                name: expect.any(String)
                            })
                        ])
                    }),
                ]),
            );
        });
    });

    describe('update', () => {
        test('should return todo list', async () => {
            const todoData = {id: 1, thing: "test", isFinish: true, tags: ["test1", "test2", "test3"]};
            const todoret:any = (await TodoService.update(todoData));
            expect(Object.keys(todoret)).toEqual(expect.arrayContaining(todoKeys));
            expect(typeof todoret.id).toBe('number');
            //輸入跟輸出會一樣
            expect(todoret.thing).toBe(todoData.thing);
            expect(todoret.createdAt).toBeIso8601();
            //如果完成就沒必要加到todo list
            expect(todoret.isFinish).toBe(todoData.isFinish);
            //新增的todo不可能為已刪除狀態
            expect(todoret.isDelete).toBe(false);
            console.log(todoret)
            for(let i = 0; i < todoData.tags.length; i++){
                expect(todoret.tags[i].name = todoData.tags[i]);
            }
        });
    });

    describe('delete', () => {
        test('isDelete should be true', async () => {
            let id = 1;
            const todoret:any = (await TodoService.del(id));
            expect(todoret.isDelete).toBe(true);
        });
    });
});
