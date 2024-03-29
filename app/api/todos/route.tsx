import { NextResponse } from "next/server";
import connectMongoDb from "../../../libs/mongoDb";
import Todo from "../../../models/todo.model";

/* POST A TODO */
export async function POST(req: Request) {
  try {
    const { text, status } = await req.json();
    await connectMongoDb();
    const postTodo = await Todo.create({ text, status });
    return NextResponse.json(postTodo);
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

/* GET ALL TODOS */
export async function GET() {
  try {
    await connectMongoDb();
    const todos = await Todo.find();
    if (!todos) {
      return NextResponse.json({ message: "Todos not found" }, { status: 404 });
    }
    return NextResponse.json(todos);
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
