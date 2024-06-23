import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const taskSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Title is Required'],
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
  },
  status: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true,
});

const TaskModel = model('Task', taskSchema);

export default TaskModel;
