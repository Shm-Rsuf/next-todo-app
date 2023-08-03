"use client";
import Link from "next/link";
import design from "../app/sass/todo.module.scss";
// import { BiEdit } from "react-icons/bi";
// import { BsTrash } from "react-icons/bs";
import { useTodosContext } from "@/app/hooks/useTodoContext";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

interface TodoProps {
  todo: any;
}

const Todo: React.FC<TodoProps> = ({ todo }) => {
  const { text, _id } = todo;
  const { dispatch } = useTodosContext();
  const router = useRouter();
  const { data: session } = useSession();

  /* HANDLE DELETE */
  const handleDelete = async (_id: string) => {
    if (!session) {
      router.push("/signin");
      return;
    }
    const res = await fetch(`/api/todos/${_id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    if (res.ok) {
      dispatch({ type: "DELETE_TODO", payload: data });
      // router.refresh();
    }
  };

  /* handleEditBtn */
  const handleEditBtn = (_id: string) => {
    if (session) {
      return router.push(`/edit-todo/${_id}`);
    } else {
      return router.push("/signin");
    }
  };

  return (
    <section className={design.section_container}>
      <div className={design.todo_div}>
        <h2>{text}</h2>
        <div className={design.todo_flex}>
          <button onClick={() => handleEditBtn(_id)} className={design.editBtn}>
            edit
          </button>

          <button
            onClick={() => handleDelete(_id)}
            className={design.deleteBtn}
          >
            delete
          </button>
        </div>
      </div>
    </section>
  );
};

export default Todo;
