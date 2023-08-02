"use client";
import Link from "next/link";
import design from "../app/sass/todo.module.scss";
// import { BiEdit } from "react-icons/bi";
// import { BsTrash } from "react-icons/bs";
import { useTodosContext } from "@/app/hooks/useTodoContext";
interface TodoProps {
  todo: any;
}

const Todo: React.FC<TodoProps> = ({ todo }) => {
  const { text, _id } = todo;
  const { dispatch } = useTodosContext();

  /* HANDLE DELETE */
  const handleDelete = async (_id: string) => {
    const res = await fetch(`/api/todos/${_id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    if (res.ok) {
      dispatch({ type: "DELETE_TODO", payload: data });
      // router.refresh();
    }
  };

  return (
    <section className={design.section_container}>
      <div className={design.todo_div}>
        <h2>{text}</h2>
        <div className={design.todo_flex}>
          <button className={design.editBtn}>
            <Link className={design.link_design} href={`/edit-todo/${_id}`}>
              edit
            </Link>
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
