"use client";

import React from "react";
import globals from "../app/styles/globals.css";
import Link from "next/link";
import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Alert from "@components/Alert";

const SignIn = () => {
  const router = useRouter();

  const [error, setError] = useState();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userInfo;
  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    const { name, value } = target;
    setUserInfo({ ...userInfo, [name]: value });
  };
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (res?.error) return setError(res.error);
    router.replace("/profile");
  };
  return (
    <div className={globals}>
      <div className="min-h-screen m-4 py-6 justify-center  items-center bg-gray-200  px-16 text-justify text-blue-800">
        <h1 className="text-3xl font-bold mb-3 mt-6">Sign In</h1>
        <div className="p-6 justify-center items-center h-screen flexbox">
          <form
            onSubmit={handleSubmit}
            className="form py-4 mt-4 border-t flex flex-col gap-5"
          >
            {error ? (
              <div className="mb-4">
                <Alert value={error} />
              </div>
            ) : null}
            <div>
              <label htmlFor="email">Email</label>
              <input
              className="input rounded-md"
              onChange={handleChange}
              value={password}
              type="password"
              name="password"
              placeholder="Password"
              />
            </div>
            <div>
              <label htmlFor="password"> Password</label>
              <input
                className="input rounded-md"
                onChange={handleChange}
                value={password}
                type="text"
                id="password"
                placeholder="Password"
              />
            </div>
            <button
              className="bg-green-700 p-3 text-white font-bold rounded-md"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
        <div className="link text-md font-bold  mb-4 mt-14">
          <span>I have an account</span>
          <Link
            href="/signup"
            style={{ color: "blue", textDecoration: "none" }}
          >
            {" "}
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

function setError(error: string): void | PromiseLike<void> {
  throw new Error("Function not implemented.");
}
