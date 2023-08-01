import TodoList from "@/components/TodoList";
import style from "./style.module.scss";
const HomePage = () => {
  return (
    <main style={{ color: style.primaryColor }}>
      <TodoList />
    </main>
  );
};

export default HomePage;
