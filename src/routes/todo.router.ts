import express, { Router } from 'express';
import ctrl from '../controllers/todo.controller';
import { celebrate } from 'celebrate';
import validate from '../validations/todo.validation';


const router: Router = express.Router();

router.route('/')
    .get(ctrl.list)
    .post(celebrate(validate.add), ctrl.add);

router.route('/:id')
    .put(celebrate(validate.update), ctrl.update)
    .delete(ctrl.del);

export default router;