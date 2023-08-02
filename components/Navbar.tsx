import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <h1>Todo applicaton</h1>
      <Link className="bg-white p-2" href={"/add-todo"}>
        Add Todo
      </Link>
    </header>
  );
};

export default Navbar;
