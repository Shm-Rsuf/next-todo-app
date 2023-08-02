import Link from "next/link";
import headerDesign from "../app/sass/header.module.scss";

const Navbar = () => {
  return (
    <header className={headerDesign.design}>
      <Link href="/" className={headerDesign.h2}>
        todo applicaton
      </Link>
      <Link className={headerDesign.link} href={"/add-todo"}>
        Add Todo
      </Link>
    </header>
  );
};

export default Navbar;
