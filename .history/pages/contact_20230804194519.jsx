"use client";

import React, {  useState } from "react";
import globals from "../app/globals.css";
import Link from "next/link";


const Contact = () => {

  const [fullname, setFullname] = useState("");
  const [reg, setReg] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Full name: ", fullname);
    console.log("Your Reg: ", reg);
    console.log("Email: ", email);
    console.log("Message: ", message);

    const res = await fetch("api/contact", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        fullname,
        reg,
        email,
        message,
      }),
    });

    const { msg, success } = await res.json();
    setError(msg);
    setSuccess(success);

    if (success) {
      setFullname("");
      setReg("");
      setEmail("");
      setMessage("");
    }
  };
  return (
    <div className="min-h-screen m-4 py-6 justify-center  items-center bg-gray-200  px-16 text-justify text-blue-800">
      <h1 className="text-3xl font-bold mb-3 mt-6">BLOG</h1>
      <div>
        <h3 className="text-xl font-bold  mb-3 mt-6">Leave a comment</h3>
        <p>
          If you want to leave a feedback to this post or to some other users
          comment, simply fill out the form below.
        </p>
        <div className="p-8 justify-center items-center h-screen flexbox">
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
              <label htmlFor="reg">Your Reg</label>
              <input
                className="input rounded-md"
                onChange={(e) => setReg(e.target.value)}
                value={reg}
                type="text"
                id="reg"
                placeholder="GF23XWD"
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
              <label htmlFor="message">Your Message</label>
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                className="h-32 textarea rounded-md"
                id="message"
                placeholder="Type your message here..."
              ></textarea>
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
                <div key={i}
                  className={`${
                    success ? "text-green-800" : "text-red-600"
                  } px-5 py-2`}
                >
                  {e}
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="link text-md font-bold  mb-4 mt-14">
          <Link
          href="/"
          style={{ color: "blue", textDecoration: "none" }}
        > 
   
          {" "}
          Go Back
      </Link></div>
    </div>
  );
};

export default Contact;