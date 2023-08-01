import mongoose, { Schema } from "mongoose";

interface Todo {
  text: string;
  status: boolean;
}

const todoSchema = new mongoose.Schema<Todo>(
  {
    text: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Todo = mongoose.models.Todo || mongoose.model("Todo", todoSchema);
export default Todo;
