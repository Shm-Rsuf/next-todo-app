"use client";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import style from "../sass/login.module.scss";
const SignInPage = () => {
  return (
    <div className={style.login_container}>
      <div>
        <button onClick={() => signIn("google")} className={style.loginBtn}>
          <FcGoogle />
          Sign in with google
        </button>
      </div>
    </div>
  );
};

export default SignInPage;
