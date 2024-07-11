import { Router } from 'express';  // Corrige la importación
import { authRequired } from '../middlewares/validateToken.js';
import { getTasks, getTask, createTask, updateTask, deleteTask } from '../controllers/tasks.controller.js';

const router = Router();  // Declaración correcta de 'router'

router.get('/tasks', authRequired, getTasks);
router.get('/tasks/:id', authRequired, getTask);
router.post('/tasks', authRequired, createTask);
router.delete('/tasks/:id', authRequired, deleteTask);
router.put('/tasks/:id', authRequired, updateTask);

export default router;
