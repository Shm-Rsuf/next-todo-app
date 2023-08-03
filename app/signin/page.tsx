"use client";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import style from "../sass/login.module.scss";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const SignInPage = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const signInWithGoogle = async () => {
    try {
      await signIn("google");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, [router, session]);

  if (session) {
    return null;
  }

  return (
    <div className={style.login_container}>
      <div>
        <button onClick={signInWithGoogle} className={style.loginBtn}>
          <FcGoogle />
          Sign in with google
        </button>
      </div>
    </div>
  );
};

export default SignInPage;
