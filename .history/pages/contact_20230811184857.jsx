"use client";

import React, {  useState } from "react";
import globals from "../app/styles/globals.css";
import Link from "next/link";


const Contact = () => {

  const [fullname, setFullname] = useState("");
  const []
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
    <div >
        <div
          className="bg-image responsive"
          style={{
            width: "100%",
            height: "130vh", 
            opacity: 0.6, 
            backgroundImage: `url("/background.png")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            fontFamily: "sans-serif",
            backgroundRepeat: "no-repeat",
            margin: "0",
            padding: "0"
          }}
        ></div>
        <div
          className="text-overlay"
        style={{
          marginTop: "70px",
            position: "absolute",
            top: "50%",
            left: "50%",
            right: "-50%",
            padding:"25px",
            transform: "translate(-50%, -50%)",
            textAlign: "justify",
            color: "white",
            zIndex: 10, 
          fontSize: "14px",
          fontFamily: "Roboto",
          textShadow: "1px 1px 1px rgba(0, 0, 0, 0.8)",
          }}
        >
       <h1 className="text-3xl font-bold mb-3 mt-6">Contact Us</h1>
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
      <div className="link text-md font-bold  mb-4 mt-14">
          <Link
          href="/"
          style={{ color: "blue", textDecoration: "none" }}
        > 
   
          {" "}
          Go Back
      </Link></div>
    </div></div>
  );
};

export default Contact;
