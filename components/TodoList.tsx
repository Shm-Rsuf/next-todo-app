"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import RemoveTodo from "./RemoveTodo";
const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /* GET ALL TODOS */
  const getAllTodos = async () => {
    try {
      setIsLoading(true);
      const res = await fetch("/api/todos", {
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("Failed to fetch todos");
      }
      const data = await res.json();
      setTodos(data);
      setIsLoading(false);
    } catch (error) {
      setError("failed to fetch todos");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllTodos();
  }, []);

  return (
    <section>
      {todos &&
        todos.map((todo: any) => (
          <div
            key={todo._id}
            style={{ backgroundColor: "gray", margin: "10px" }}
          >
            <h1>{todo.text}</h1>
            {/* <Todo todo={todo} /> */}
            <div>
              <Link href={`/edit-todo/${todo._id}`}>edit</Link>
              <RemoveTodo id={todo._id} />
            </div>
          </div>
        ))}
    </section>
  );
};

export default TodoList;
