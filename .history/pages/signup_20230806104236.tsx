import React from 'react'
import Link from "next/link";
import { ChangeEventHandler, FormEventHandler, useState } from 'react';

const SignUp = () => {
    const [userInfo, setUserInfo] = useState({
        fullname: "",
        email: "",
        password: ""
    });
    const { name, email, password } = userInfo;
    const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
        const { name, value } = target;
        setUserInfo({ ...userInfo, [name]: value })
    };
    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        
    }
  return (
<div className="min-h-screen m-4 py-6 justify-center  items-center bg-gray-200  px-16 text-justify text-blue-800">
      <h1 className="text-3xl font-bold mb-3 mt-6">Sign Up</h1>
      <div className="p-6 justify-center items-center h-screen flexbox">
        <form
          onSubmit={handleSubmit}
          className="form py-4 mt-4 border-t flex flex-col gap-5"
        >
          <div>
            <label htmlFor="fullname">Full Name</label>
            <input
              className="input rounded-md"
              onChange={(e) => setFullname(e.target.value)}
              value={fullname}
              type="text"
              id="fullname"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              className="input rounded-md"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="text"
              id="email"
              placeholder="john@gmail.com"
            />
          </div>
          <div>
            <label htmlFor="password"> Password</label>
            <input
              className="input rounded-md"
              onChange={(e) => setPassword(e.target.value)}
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
        <div className="bg-slate-100 flex flex-col rounded-md">
          {error &&
            error.map((e, i) => (
              <div
                key={i}
                className={`${
                  success ? "text-green-800" : "text-red-600"
                } px-5 py-2`}
              >
                {e}
              </div>
            ))}
        </div>
      </div>
      <div className="link text-md font-bold  mb-4 mt-14">
        <span>I have an account</span>
        <Link href="/login" style={{ color: "blue", textDecoration: "none" }}>
          {" "}
          Login
        </Link>
      </div>
    </div>
  );
};


export default SignUp;