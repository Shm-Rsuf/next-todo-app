import { NextResponse } from "next/server";
import connectMongoDb from "../../../../libs/mongoDb";
import Todo from "../../../../models/todo.model";

/* UPDATE TODO */
export async function PUT(req, { params }) {
  try {
    const { id } = params;
    const { text, status } = await req.json();
    console.log(id, text, status);
    if (!id) {
      return NextResponse.json({ message: "Invalid id" }, { status: 400 });
    }

    await connectMongoDb();

    await Todo.findByIdAndUpdate(id, { text, status }, { new: true });
    return NextResponse.json({ message: "Todo is updated" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

/* DELETE TODO */
export async function DELETE(req, { params }) {
  try {
    const { id } = params;
    console.log(id);
    if (!id) {
      return NextResponse.json({ message: "Invalid id" }, { status: 400 });
    }

    await connectMongoDb();
    await Todo.findByIdAndDelete({ _id: id });
    return NextResponse.json({ message: "Todo is deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
