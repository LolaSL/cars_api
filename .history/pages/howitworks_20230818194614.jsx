"use client";
import React from "react";
import globals from "../app/styles/globals.css";
import Link from "next/link";

const HowItWorks = () => {
  return (
    <div className={`min-h-screen m-4 py-6 justify-center  items-center bg-gray-200  px-16 text-justify text-blue-800 ${globals}`}>
        <h1 className="text-3xl font-bold mb-3 mt-6"> How it works</h1>
        <h3 className="text-2xl font-bold mb-3 mt-6">Coming soon</h3>
        <p className="text-2xl">
          Say goodbye to manual bookings and paperwork. With Car Loft, you can
          accept online booking and manage your vehicle fleet, bookings,
          clients, and payments all in one place. Simplify your operations and
          increase customer satisfaction.
        </p>
        
          <Link href="/" style={{ color: "blue", textDecoration: "none" }}>
            {" "}
            Go Back
          </Link>
        </div>
      </div>

  );
};

export default HowItWorks;
