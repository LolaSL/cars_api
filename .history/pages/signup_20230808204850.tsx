import React from "react";
import Link from "next/link";
import { ChangeEventHandler, FormEventHandler, useState } from "react";


const SignUp = () => {
  const[busy, setBusy]=useState(false)
  const [userInfo, setUserInfo] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  const { fullname, email, password } = userInfo;
  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    const { name, value } = target;
    setUserInfo({ ...userInfo, [name]: value });
  };
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    setBusy(true)
    e.preventDefault();
    const res = await fetch("api/auth/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    }).then((res) => res.json());
    console.log(res);
    setBusy(false)
  };
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
              onChange={handleChange}
              value={fullname}
              type="text"
              name="fullname"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              className="input rounded-md"
              onChange={handleChange}
              value={email}
              type="email"
              name="email"
              placeholder="john@gmail.com"
            />
          </div>
          <div>
            <label htmlFor="password"> Password</label>
            <input
              className="input rounded-md"
              onChange={handleChange}
              value={password}
              type="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <button
            className="bg-green-700 p-3 text-white font-bold rounded-md"
            type="submit"
            disabled={busy}
          >
            Send
          </button>
        </form>
      </div>
      <div className="link text-md font-bold  mb-4 mt-14">
        <span>I have an account</span>
        <Link href="/signup" style={{ color: "blue", textDecoration: "none" }}>
          {" "}
          Login
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
