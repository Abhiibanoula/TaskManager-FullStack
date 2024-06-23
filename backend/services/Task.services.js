import httpStatus from 'http-status';
import { TaskModel } from '../models';

const AddTask = async (body) => {
  try {
    const { title, description } = body;
    const newTask = await TaskModel.create({ title, description });
    return {
      msg: 'Task Created',
      code: httpStatus.CREATED,
      success: true,
      task: newTask, // Return the newly created task for reference
    };
  } catch (error) {
    return {
      msg: error.message,
      code: httpStatus.INTERNAL_SERVER_ERROR,
      success: false,
    };
  }
};

const GetAllTask = async () => {
  try {
    const allTasks = await TaskModel.find({});
    return {
      msg: 'Tasks Fetched',
      code: httpStatus.OK,
      success: true,
      tasks: allTasks, // Rename to tasks for consistency
      total: allTasks.length,
    };
  } catch (error) {
    return {
      msg: error.message,
      code: httpStatus.INTERNAL_SERVER_ERROR,
      success: false,
      tasks: [], // Empty array for consistency
      total: 0,
    };
  }
};

const UpdateTask = async (id) => {
  try {
    const existTask = await TaskModel.findByIdAndUpdate(id, { $set: { status: true } });
    if (!existTask) {
      return {
        msg: 'Task Not Found',
        code: httpStatus.NOT_FOUND,
        success: false,
      };
    }
    if (existTask.status) {
      return {
        msg: 'Task Already Completed',
        code: httpStatus.BAD_REQUEST, // Use BAD_REQUEST for existing tasks
        success: false,
      };
    }
    return {
      msg: 'Task Updated',
      code: httpStatus.OK,
      success: true,
    };
  } catch (error) {
    return {
      msg: error.message,
      code: httpStatus.INTERNAL_SERVER_ERROR,
      success: false,
    };
  }
};

const DeleteTask = async (id) => {
  try {
    const existTask = await TaskModel.findByIdAndDelete(id);
    if (!existTask) {
      return {
        msg: 'Task Not Found',
        code: httpStatus.NOT_FOUND,
        success: false,
      };
    }
    return {
      msg: 'Task Deleted',
      code: httpStatus.OK,
      success: true,
    };
  } catch (error) {
    return {
      msg: error.message,
      code: httpStatus.INTERNAL_SERVER_ERROR,
      success: false,
    };
  }
};

export { AddTask, GetAllTask, UpdateTask, DeleteTask };
