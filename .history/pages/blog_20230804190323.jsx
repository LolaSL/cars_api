"use client";

import React, {  useState } from "react";
import globals from "../app/globals.css";
import Link from "next/link";


const Blog = () => {

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
      <h2 className="text-2xl font-bold mb-3 mt-6">Does Modifying a Classic Car Decrease Its Value?</h2>
      <p>
        Even if you don’t see yourself parting with your classic car, it’s value
        is an important factor. Value changes over time for countless reasons,
        but one of them is modification. Whether you’re adding modern features
        or souping up the engine, will your classic lose value if you modify it?
      </p>
      <h3 className="text-xl font-bold mb-3 mt-6">Driveability vs. Authenticity</h3>
      <p>
        An important dynamic to be aware of is driveability vs. authenticity. A
        common motivation behind modern upgrades for a classic car is to improve
        driving experience and extend its longevity as a usable vehicle, whether
        it’s related to the engine, steering, interior features, or other
        elements. On the flip side, many collector car hobbyists will avoid
        modern upgrades and focus their restoration and maintenance work on
        total authenticity to the original traits of the car and the period it’s
        from. Generally speaking, authenticity wins out if you want to minimize
        loss in value, but this depends on the car itself and the collector
        market, which isn’t always easy to predict.
      </p> 
      <h3 className="text-xl font-bold  mb-3 mt-6">Walking the Line</h3>
        <p>
          If you have a pretty authentic classic car and want to make
          modifications without threatening its value or faithfulness, you might
          assume that you’re out of options. Fortunately, this isn’t always the
          case. Plenty of upgrades can be done without introducing noticeable or
          irreversible changes to the vehicle, as long as you’re prepared to do or
          pay for the work involved in returning it to its original state.
          Limiting yourself to bolt-on or bolt-in upgrades and keeping the
          original parts is a great way to make this work. Additionally, many
          changes can improve the driveability and longevity of a car without
          being noticeable, such as micro-polishing transmission gears.{" "}
        </p>
<h3 className="text-xl font-bold  mb-3 mt-6">Set Your Expectations</h3>
        <p>
          Different hobbyists will get into classic cars for different reasons.
          Some will restore for the love of the process, some will collect
          pristine-condition models that are ready for a showroom, and others are
          planning to resell. It’s pretty common for hobbyists to simply give
          their cars the treatment that interests them and fits in their budget,
          understanding from the get-go that selling at a loss is a likelihood. On
          the other hand, buying and reselling for profit may not be feasible for
          the average collector, but some manage to pull it off. Ultimately, it’s
          wise to do your homework on the upgrades you want and set your
          expectations (and your long-term budget) accordingly.
        </p>
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
                <div key
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

export default Blog;
