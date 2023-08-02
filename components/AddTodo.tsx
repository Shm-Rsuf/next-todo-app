"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const AddTodo = () => {
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
        router.refresh();
      } else {
        throw new Error("Failed to create a new todo");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Add your todo"
          required
        />
        <button type="submit">Add Todo</button>
      </form>
    </section>
  );
};

export default AddTodo;
