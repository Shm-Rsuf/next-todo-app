"use client";
import { signOut } from "next-auth/react";
const SignInPage = () => {
  return (
    <div>
      <button onClick={() => signOut()}>
        <h3>Logout</h3>
      </button>
    </div>
  );
};

export default SignInPage;
