"use client";
import { useRouter } from "next/navigation";

interface RemoveTodoProps {
  id: string;
}

const RemoveTodo: React.FC<RemoveTodoProps> = ({ id }) => {
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

  return <button onClick={() => handleDelete(id)}>delete</button>;
};

export default RemoveTodo;
