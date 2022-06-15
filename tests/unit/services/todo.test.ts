import 'jest';
import 'expect-more-jest';
import TodoService from '../../../src/services/todo.service';
import todoService from '../../../src/services/todo.service';

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
            todoret = await todoService.add(todoThing, tags);
            expect(Object.keys(todoret)).toEqual(expect.arrayContaining(todoKeys));
            expect(typeof todoret.id).toBe('number');
            //輸入跟輸出會一樣
            expect(todoret.thing).toBe(todoThing);
            expect(todoret.createdAt).toBeIso8601();
        });
    });
});
