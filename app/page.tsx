import TodoList from "@/components/TodoList";
import style from "./style.module.scss";
import AddTodo from "@/components/AddTodo";
const HomePage = () => {
  return (
    <main style={{ color: style.primaryColor }}>
      <TodoList />
    </main>
  );
};

export default HomePage;
