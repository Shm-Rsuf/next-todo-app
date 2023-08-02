"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import design from "../app/sass/editTodo.module.scss";

const EditForm = ({ todo }: { todo: any }) => {
  const [text, setText] = useState(todo?.text);

  const router = useRouter();

  /* HANDEL EDIT SUBMIT */
  const handelEditSubmit = async (e: any) => {
    e.preventDefault();
    const res = await fetch(`/api/todos/${todo._id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ text }),
    });
    if (res.ok) {
      console.log("todo is upadated");
      router.push("/");
    }
  };

  return (
    <section className={design.edit_container}>
      <form onSubmit={handelEditSubmit} className={design.form_container}>
        <input
          onChange={(e) => setText(e.target.value)}
          type="text"
          value={text}
          className={design.input_container}
        />
        <button className={design.btn_container} type="submit">
          Update Todo
        </button>
      </form>
    </section>
  );
};

export default EditForm;
