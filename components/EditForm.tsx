"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import design from "../app/sass/editTodo.module.scss";
import { useTodosContext } from "@/app/hooks/useTodoContext";

interface EditFormProps {
  id: string;
  title: string;
  status: boolean;
}

const EditForm: React.FC<EditFormProps> = ({ title, id, status }) => {
  const [text, setText] = useState(title);
  const { dispatch } = useTodosContext();
  const router = useRouter();

  /* HANDEL EDIT SUBMIT */
  const handelEditSubmit = async (e: any) => {
    e.preventDefault();

    const res = await fetch(`/api/todos/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ text }),
    });
    const data = await res.json();
    if (res.ok) {
      dispatch({ type: "UPDATE_TODO", payload: data });
      // console.log("todo is upadated");
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
          required
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
