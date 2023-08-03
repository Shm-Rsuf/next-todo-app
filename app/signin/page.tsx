"use client";
import { signIn } from "next-auth/react";
const SignInPage = () => {
  return (
    <div>
      <button onClick={() => signIn("google")}>
        <h3>Sign</h3>
      </button>
    </div>
  );
};

export default SignInPage;
