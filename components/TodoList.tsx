"use client";
import design from "../app/sass/todolist.module.scss";
import { useTodosContext } from "../app/hooks/useTodoContext";

import Link from "next/link";
import { useState, useEffect } from "react";

import Todo from "./Todo";
const TodoList = () => {
  // const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { todos, dispatch } = useTodosContext();

  /* GET ALL TODOS */

  useEffect(() => {
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
        if (res.ok) {
          dispatch({ type: "SET_TODOS", payload: data });
        }
        // setTodos(data);
        setIsLoading(false);
      } catch (error) {
        setError("failed to fetch todos");
        setIsLoading(false);
      }
    };
    getAllTodos();
  }, [dispatch]);

  return (
    <section className={design.section_container}>
      {todos &&
        todos.map((todo: any) => (
          <div key={todo._id}>
            <Todo todo={todo} />
          </div>
        ))}
    </section>
  );
};

export default TodoList;
