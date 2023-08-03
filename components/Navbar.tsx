"use client";
import Link from "next/link";
import style from "../app/sass/header.module.scss";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();
  return (
    <header className={style.design}>
      <Link className={style.link} href={"/add-todo"}>
        Add Todo
      </Link>
      <div>
        {session ? (
          <button onClick={() => signOut()} className={style.link}>
            Sign out
          </button>
        ) : (
          <Link href="/signin" className={style.link}>
            Sign In
          </Link>
        )}
      </div>
    </header>
  );
};

export default Navbar;
