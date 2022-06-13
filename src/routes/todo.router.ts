import express, { Router } from 'express';
import ctrl from '../controllers/todo.controller';
import { celebrate } from 'celebrate';


const router: Router = express.Router();

router.route('/').get(ctrl.list);

export default router;