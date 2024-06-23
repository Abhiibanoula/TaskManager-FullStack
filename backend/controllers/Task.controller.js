import httpStatus from 'http-status';
import { TaskService } from '../services/index.js';

export const AddTask = async (req, res) => {
  try {
    const res_obj = await TaskService.AddTask(req.body);
    res.status(res_obj.code).send(res_obj);
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
      msg: error.message,
      code: httpStatus.INTERNAL_SERVER_ERROR,
      success: false,
    });
  }
};

export const GetAllTask = async (req, res) => {
  try {
    const res_obj = await TaskService.GetAllTask();
    res.status(res_obj.code).send(res_obj);
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
      msg: error.message,
      code: httpStatus.INTERNAL_SERVER_ERROR,
      success: false,
    });
  }
};

export const UpdateTask = async (req, res) => {
  try {
    const res_obj = await TaskService.UpdateTask(req.params.id);
    res.status(res_obj.code).send(res_obj);
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
      msg: error.message,
      code: httpStatus.INTERNAL_SERVER_ERROR,
      success: false,
    });
  }
};

export const DeleteTask = async (req, res) => {
  try {
    const res_obj = await TaskService.DeleteTask(req.params.id);
    res.status(res_obj.code).send(res_obj);
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
      msg: error.message,
      code: httpStatus.INTERNAL_SERVER_ERROR,
      success: false,
    });
  }
};
