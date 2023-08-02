"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
interface TodoProps {
  todo: any;
}

const Todo: React.FC<TodoProps> = ({ todo }) => {
  const { text, _id } = todo;
  const router = useRouter();

  /* HANDLE DELETE */
  const handleDelete = async (id: string) => {
    const confirmed = confirm("Are you sure?");
    if (confirmed) {
      const res = await fetch(`/api/todos/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        router.refresh();
      }
    }
  };

  /* HANDLE EDIT */
  const handleEdit = async (id: string) => {
    console.log(id);
  };

  return (
    <section>
      <div>
        <h2>{text}</h2>
        <button onClick={() => handleEdit(_id)}>
          <Link href={`/edit-todo/${_id}`}>Edit</Link>
        </button>
        <button onClick={() => handleDelete(_id)}>Delete</button>
      </div>
    </section>
  );
};

export default Todo;
