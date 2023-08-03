"use client";
import Link from "next/link";
import headerDesign from "../app/sass/header.module.scss";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();
  console.log({ session });
  return (
    <header className={headerDesign.design}>
      {/* <Link href="/" className={headerDesign.h2}>
        todo applicaton
      </Link> */}
      <Link className={headerDesign.link} href={"/add-todo"}>
        Add Todo
      </Link>
      <div>
        {session ? (
          <Link href="/">Logout</Link>
        ) : (
          <Link href="/signin">SignIn</Link>
        )}
      </div>
    </header>
  );
};

export default Navbar;
