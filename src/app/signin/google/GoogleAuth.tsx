import { signIn } from "@/lib/auth-client";
import React from "react";
import { FaGoogle } from "react-icons/fa6";

const GoogleAuth = () => {
  const handelSignInWithGoogle = async () => {
    await signIn.social({
      provider: "google",
    });
  };

  return (
    <>
      <button
        onClick={handelSignInWithGoogle}
        className="w-full bg-[#189346] cursor-pointer rounded-xl text-white p-3"
      >
        <FaGoogle className="inline" /> Google
      </button>
    </>
  );
};

export default GoogleAuth;
