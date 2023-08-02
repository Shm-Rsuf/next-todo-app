"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import design from "../sass/addTodo.module.scss";

const AddTodoPage = () => {
  const [text, setText] = useState("");
  const router = useRouter();

  /* SUBMIT HANDLER */
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/todos", {
        method: "POST",
        headers: {
          "Content-type": "applicaion/json",
        },
        body: JSON.stringify({ text }),
      });
      setText("");

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create a new todo");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className={design.addtodo_container}>
      <form onSubmit={handleSubmit} className={design.form_container}>
        <input
          type="text"
          onChange={(e) => setText(e.target.value)}
          value={text}
          required
          className={design.input_container}
        />
        <button type="submit">Add Todo</button>
      </form>
    </section>
  );
};

export default AddTodoPage;
