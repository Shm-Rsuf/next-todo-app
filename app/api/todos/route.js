import { NextResponse } from "next/server";
import connectMongoDb from "../../../libs/mongoDb";
import Todo from "../../../models/todo.model";

export async function POST(req) {
  const { text, status } = await req.json();
  await connectMongoDb();
  await Todo.create({ text, status });
  return NextResponse.json({ message: "Todo is created" }, { status: 200 });
}
