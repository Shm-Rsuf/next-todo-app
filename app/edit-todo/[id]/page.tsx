"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import EditForm from "@/components/EditForm";
import axios from "axios";

const EditTodo = () => {
  const [todo, setTodo] = useState("");
  const params = useParams();
  const { id } = params;

  /* get a single todo starts */
  useEffect(() => {
    const getTodoById = async () => {
      try {
        const res = await axios.get(`/api/todos/${id}`);
        setTodo(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getTodoById();
  }, [id, setTodo]);
  /* get a single todo ends */

  return <EditForm todo={todo} />;
};

export default EditTodo;
