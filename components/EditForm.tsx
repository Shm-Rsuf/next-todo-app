"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

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
    <section onSubmit={handelEditSubmit}>
      <form>
        <input
          onChange={(e) => setText(e.target.value)}
          type="text"
          value={text}
        />
        <button type="submit">Update Todo</button>
      </form>
    </section>
  );
};

export default EditForm;
