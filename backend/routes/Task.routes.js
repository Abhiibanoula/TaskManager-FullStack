import express from 'express';
import { TaskController } from '../controllers/index.js';
import { TaskValidation } from '../validations/index.js';
import ValidationMiddleware from '../middlewares/validation.js';

const router = express.Router();

router.route('/')
  // GET route: /api/v1/task 
  .get(TaskController.GetAllTask)
  // POST route: /api/v1/task 
  .post(TaskValidation.AddTask, ValidationMiddleware, TaskController.AddTask);

router.route('/:id')
  // PUT route: /api/v1/task/{mongoid} 
  .put(TaskValidation.MONGO_ID, ValidationMiddleware, TaskController.UpdateTask)
  // DELETE route: /api/v1/task/{mongoid} 
  .delete(TaskValidation.MONGO_ID, ValidationMiddleware, TaskController.DeleteTask);

export default router;
