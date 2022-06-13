import express, { Router } from 'express';
import ctrl from '../controllers/todo.controller';
import { celebrate } from 'celebrate';


const router: Router = express.Router();

router.route('/').get(ctrl.list);

router.route('/').post(ctrl.add);

router.route('/:id').put(ctrl.update);

router.route('/:id').delete(ctrl.del);

export default router;