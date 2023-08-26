"use client";
import React from "react";
import globals from "../app/globals.css";
import Link from "next/link";

const Featured = () => {
  return (
    <div className="min-h-screen m-8 py-6 justify-center  items-center bg-gray-200  px-16 text-justify text-blue-800">
      <h1 className="text-3xl font-bold mb-3 mt-6">Featured</h1>
      <h2>Coming soon. Accelerate growth</h2>
      <p>
        Our marketing module includes but is not limited to email and sms
        campaigns. Detailed analytics on traffic sources helps you analyze your
        marketing campaigns and manage resources according to data.
      </p>
      <div className="link mt-12">
      <Link
          id="link"
          href="/"
          style={{ color: "blue", textDecoration: "none" }}
        >
          {" "}
          Go Back
        </Link></div>
    </div>
    
  );
};

export default Featured;
