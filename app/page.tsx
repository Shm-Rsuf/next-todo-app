import TodoList from "@/components/TodoList";
import design from "./sass/home.module.scss";

const HomePage = () => {
  return (
    <main className={design.home_container}>
      <TodoList />
    </main>
  );
};

export default HomePage;
