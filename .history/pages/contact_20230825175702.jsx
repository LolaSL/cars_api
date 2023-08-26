"use client";

import React, { useState } from "react";
import globals from "../app/styles/globals.css";
import Link from "next/link";

const Contact = () => {
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [reg, setReg] = useState("");
  const [carModel, setCarModel] = useState();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Full name: ", fullname);
    console.log("Phone Number: ", phone);
    console.log("Your Reg: ", reg);
    console.log("Desired Car Model: ", reg);
    console.log("Email: ", email);
    console.log("Message: ", message);

    const res = await fetch("api/contact", {
      method: "POST",
      headers: {
        'Accept': 'application/json, text/plain, */*',
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        fullname,
        phone,
        reg,
        carModel,
        email,
        message,
      }),
    });
    
    console.log("Fetch Response:", res);
    
    const { msg, success } = await res.json();
    

    setError(msg);
    setSuccess(success);

    if (success) {
      setFullname("");
      setPhone("");
      setReg("");
      setCarModel(:)
      setEmail("");
      setMessage("");
    }
  };
  return (
    <div
      className={`min-h-screen m-4 py-6 justify-center text-blue-800 items-center bg-gray-200  px-16 text-justify${globals}`}
    >
      <h1 className="article__title">Contact Us</h1>
      <span className="font-bold ">
        <p>Hours of operation:</p>
        <p>Sun to Thurs 9am - 7pm </p>
        <p> Fri 9am - 2pm </p>
        <p>Phone: +972 xxxx xxx xxx</p>
        <p>Email: car.loft.re.n.t@gmail.com</p>
        <p>Location: Israel,  Tel Aviv Ben Gurion International Airport, Therminal 3</p>
      </span>
      <div className="p-6 justify-center items-center h-screen flexbox">
        <form
          onSubmit={handleSubmit}
          className="form py-4 mt-4 border-t flex flex-col gap-5"
        >
          <div>
            <label htmlFor="fullname">Full Name</label>
            <input
              className="input rounded-md text-black"
              onChange={(e) => setFullname(e.target.value)}
              value={fullname}
              type="text"
              id="fullname"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label htmlFor="phone">Your Phone Number With Country Code</label>
            <input
              className="input rounded-md text-black"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              type="number"
              id="phone"
              placeholder="+972 1111111111"
            />
          </div>
          <div>
            <label htmlFor="reg">Your Reg</label>
            <input
              className="input rounded-md text-black"
              onChange={(e) => setReg(e.target.value)}
              value={reg}
              type="text"
              id="reg"
              placeholder="GF23XWD"
            />
          </div>
          <div>
            <label htmlFor="carModel">Desired Car Model</label>
            <input
              className="input rounded-md text-black"
              onChange={(e) => setCarModel(e.target.value)}
              value={carModel}
              type="text"
              id="carModel"
              placeholder="Alfa Romeo Giulia Awd"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              className="input rounded-md text-black"
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
              className="h-32 textarea rounded-md text-black"
              id="message"
              placeholder="Type your message here"
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
      <div className="link font-bold  mb-4 mt-14">
        <Link href="/" style={{ color: "blue", textDecoration: "none" }}>
          {" "}
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default Contact;
