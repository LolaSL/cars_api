"use client";
import React from "react";
import globals from "../app/styles/globals.css";
import Link from "next/link";

const HowItWorks = () => {
  return (
    <div className={`min-h-screen m-4 py-6 justify-center  items-center bg-gray-200  px-16 text-justify text-blue-800 ${globals}`}>
      <h1 className="text-3xl font-bold mb-3 mt-6 text-center"> How it works</h1>
      <div
        className="show__image  mb-3 mt-6 resposive shadow-md"
        style={{
          borderRadius: "3%",
          overflow: "hidden",
          width: "360px",
          height: "290px",
          position: "relative",
        }}
      >
        <Image
          src="/comming_soon.png"
          alt="podcast"
          layout="fill"
          objectFit="cover"
        />
      </div>
        <h3 className="text-2xl font-bold mb-3 mt-6">Coming soon</h3>
        <p className="text-2xl">
          Say goodbye to manual bookings and paperwork. With Car Loft, you can
          accept online booking and manage your vehicle fleet, bookings,
          clients, and payments all in one place. Simplify your operations and
          increase customer satisfaction.
      </p>
      
      <div className="link text-xl font-bold  mb-3 mt-6 text-blue-800">
          <Link href="/" style={{ color: "blue", textDecoration: "none" }}>
            {" "}
            Go Back
          </Link></div>
        </div>

  );
};

export default HowItWorks;
